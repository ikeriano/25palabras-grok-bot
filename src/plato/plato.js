// Plató 3D ORIGINAL inspirado en las fotos del plató de «25 palabras» (Telecinco, 2022-2023):
// paredes LED azules con franjas verticales y acentos naranjas, banda superior curva con el nombre de la
// prueba o el bote, anillos de neón colgando del techo, logo circular rosa, sofás amarillos capitoné para
// cada equipo, atril blanco del presentador y suelo negro reflectante con un gran «25».
import * as THREE from 'three';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import { mat, glow, figure } from '../lib/helpers.js';
import { drawLogo } from './logo.js';

export const PALETA_BASE = { led: '#2a6bff', led2: '#06164a', acento: '#ffb020', neon: 0xdff4ff, banda: '#0a1a6a', fondo: 0x02040e };
export const COLORES_EQ = { azul: '#2a8bff', rosa: '#ff3fb4' };

function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); draw(g, w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.userData = { c, g }; return t; }

function pintaLED(g, w, h, p, seed = 1) {
  let s = seed * 77 + 3; const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, p.led2); gr.addColorStop(0.5, '#0a2a9a'); gr.addColorStop(1, p.led2); g.fillStyle = gr; g.fillRect(0, 0, w, h);
  // franjas verticales de luz azul / cian / blanca, con algunas naranjas
  for (let x = 0; x < w; x += 18 + rnd() * 22) {
    const ww = 4 + rnd() * 12, y0 = rnd() * h * 0.35, y1 = h - rnd() * h * 0.3; const naranja = rnd() < 0.12;
    const col = naranja ? p.acento : rnd() < 0.3 ? '#e8f6ff' : rnd() < 0.5 ? '#5fd8ff' : p.led;
    g.shadowColor = col; g.shadowBlur = 14; g.fillStyle = col; g.globalAlpha = 0.55 + rnd() * 0.45; g.fillRect(x, y0, ww, y1 - y0);
  }
  g.globalAlpha = 1; g.shadowBlur = 0;
  // líneas horizontales cian (como las bandas de las fotos)
  [0.62, 0.66, 0.9].forEach((f, i) => { g.shadowColor = '#5fd8ff'; g.shadowBlur = 20; g.fillStyle = i === 2 ? p.acento : '#9fe8ff'; g.fillRect(0, h * f, w, i === 2 ? 6 : 4); });
  g.shadowBlur = 0;
}
function texSuelo() {
  return canvasTex(2048, 2048, (g, w, h) => {
    g.fillStyle = '#04050a'; g.fillRect(0, 0, w, h);
    g.save(); g.globalAlpha = 0.85;
    // aros cian del centro
    [[600, 10, '#5fd8ff'], [540, 4, '#c0f0ff'], [930, 6, '#2a6bff']].forEach(([r, lw, c]) => { g.strokeStyle = c; g.lineWidth = lw; g.shadowColor = c; g.shadowBlur = 30; g.beginPath(); g.arc(w / 2, h / 2, r, 0, Math.PI * 2); g.stroke(); });
    g.restore();
    // «25» gigante en el suelo
    g.save(); g.globalAlpha = 0.9; g.font = '900 620px "Arial Black", Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = 26; g.strokeStyle = '#5fd8ff'; g.shadowColor = '#2a8bff'; g.shadowBlur = 40; g.strokeText('25', w / 2, h / 2 + 10);
    g.fillStyle = 'rgba(30,80,200,0.35)'; g.fillText('25', w / 2, h / 2 + 10); g.restore();
    // líneas radiales tenues
    g.save(); g.translate(w / 2, h / 2); g.strokeStyle = 'rgba(95,216,255,0.18)'; g.lineWidth = 6; for (let i = 0; i < 12; i++) { g.rotate(Math.PI / 6); g.beginPath(); g.moveTo(980, 0); g.lineTo(1400, 0); g.stroke(); } g.restore();
  });
}

export function construirPlato(scene, ctx, renderer) {
  const root = new THREE.Group(); scene.add(root);
  let pal = { ...PALETA_BASE };
  scene.background = new THREE.Color(pal.fondo); scene.fog = new THREE.Fog(pal.fondo, 34, 90);
  // ---------- luces ----------
  const hemi = new THREE.HemisphereLight(0x9fb8ff, 0x101030, 0.85); root.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, 1.3); key.position.set(3, 14, 12); key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 40 }); root.add(key);
  const fillA = new THREE.PointLight(0x3a8bff, 40, 30, 1.5); fillA.position.set(-8, 6, -4); root.add(fillA);
  const fillB = new THREE.PointLight(0x5fd8ff, 34, 30, 1.5); fillB.position.set(8, 6, -4); root.add(fillB);
  const fillC = new THREE.PointLight(0xffc060, 18, 20, 1.8); fillC.position.set(0, 5, 4); root.add(fillC);

  // ---------- suelo negro reflectante ----------
  let reflector = null;
  const refl = new Reflector(new THREE.CircleGeometry(30, 64), { textureWidth: 1024, textureHeight: 1024, color: 0x6a7080 });
  refl.rotation.x = -Math.PI / 2; refl.position.y = 0; root.add(refl); reflector = refl;
  const sueloTex = texSuelo();
  const sueloMat = new THREE.MeshStandardMaterial({ map: sueloTex, transparent: true, opacity: 0.7, roughness: 0.25, metalness: 0.2, emissive: 0xffffff, emissiveMap: sueloTex, emissiveIntensity: 0.55 });
  const tarima = new THREE.Mesh(new THREE.CylinderGeometry(12.5, 12.6, 0.18, 96), [mat(0xe8f4ff, { emissive: 0x9fd8ff, emissiveIntensity: 0.9 }), sueloMat, mat(0x05060c)]);
  tarima.position.set(0, 0.09, -2); tarima.receiveShadow = true; root.add(tarima);
  const bordeTarima = new THREE.Mesh(new THREE.TorusGeometry(12.55, 0.05, 6, 160), glow(0xe8f8ff, 2.5)); bordeTarima.rotation.x = Math.PI / 2; bordeTarima.position.set(0, 0.18, -2); root.add(bordeTarima);

  // ---------- paredes LED curvas ----------
  const leds = [];
  const addLED = (r, y0, alto, a0, a1, cx, cz, seed) => {
    const tex = canvasTex(2048, 512, (g, w, h) => pintaLED(g, w, h, pal, seed)); tex.wrapS = THREE.RepeatWrapping;
    const m = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, toneMapped: false, color: 0xbfcfff });
    const geo = new THREE.CylinderGeometry(r, r, alto, 72, 1, true, a0, a1 - a0);
    const me = new THREE.Mesh(geo, m); me.position.set(cx, y0 + alto / 2, cz); root.add(me); leds.push({ m, tex, seed });
    return me;
  };
  // Cylinder theta: 0 → +z. Detrás = PI. Pared principal de -110º a +110º alrededor de la parte trasera
  addLED(17, 0, 7.2, Math.PI * 0.42, Math.PI * 1.58, 0, 0, 1);
  addLED(17.6, 7.2, 1.2, Math.PI * 0.42, Math.PI * 1.58, 0, 0, 2); // remate encima de la banda
  // ---------- banda superior curva (nombre de la prueba / bote) ----------
  const bandaTex = canvasTex(4096, 160, () => {}); bandaTex.wrapS = THREE.RepeatWrapping; bandaTex.repeat.x = -1;
  const bandaMat = new THREE.MeshBasicMaterial({ map: bandaTex, side: THREE.BackSide, toneMapped: false });
  const banda = new THREE.Mesh(new THREE.CylinderGeometry(16.2, 16.2, 1.25, 96, 1, true, Math.PI * 0.45, Math.PI * 1.1), bandaMat); banda.position.set(0, 8.3, 0); root.add(banda);
  let bandaTxt = '25 palabras';
  function pintaBanda() {
    const { g } = bandaTex.userData, w = 4096, h = 160; g.clearRect(0, 0, w, h);
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#1a0a3a'); gr.addColorStop(0.5, pal.banda); gr.addColorStop(1, '#1a0a3a'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ff2a6a'; g.shadowColor = '#ff2a6a'; g.shadowBlur = 16; g.fillRect(0, 4, w, 10); g.fillRect(0, h - 14, w, 10); g.shadowBlur = 0;
    g.font = 'italic 900 86px "Arial Black", Arial'; g.textBaseline = 'middle'; g.textAlign = 'center'; g.fillStyle = '#ffffff'; g.shadowColor = '#9fe8ff'; g.shadowBlur = 12;
    const n = 5; for (let i = 0; i < n; i++) g.fillText(bandaTxt, w * (i + 0.5) / n, h / 2 + 4); g.shadowBlur = 0; bandaTex.needsUpdate = true;
  }
  pintaBanda();
  // laterales LED rectos
  for (const sx of [-1, 1]) { const tex = canvasTex(512, 512, (g, w, h) => pintaLED(g, w, h, pal, sx + 5)); const p = new THREE.Mesh(new THREE.PlaneGeometry(4, 7), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, color: 0xbfcfff })); p.position.set(sx * 15.6, 3.5, 6); p.rotation.y = -sx * Math.PI / 2; root.add(p); leds.push({ m: p.material, tex, seed: sx + 5, plano: true }); }

  // ---------- pantalla central (logo / prueba / videollamada) ----------
  const PW = 8.4, PH = 4.8;
  const pantCanvas = document.createElement('canvas'); pantCanvas.width = 1400; pantCanvas.height = 800;
  const pg = pantCanvas.getContext('2d'); const pantTex = new THREE.CanvasTexture(pantCanvas); pantTex.colorSpace = THREE.SRGBColorSpace; pantTex.anisotropy = 4;
  const pantalla = new THREE.Group(); pantalla.position.set(0, 0, -13.2); root.add(pantalla);
  const marco = new THREE.Mesh(new THREE.BoxGeometry(PW + 0.4, PH + 0.4, 0.3), mat(0x0a1030, { metalness: 0.6, roughness: 0.4 })); marco.position.y = 1.2 + PH / 2; pantalla.add(marco);
  const pantMesh = new THREE.Mesh(new THREE.PlaneGeometry(PW, PH), new THREE.MeshBasicMaterial({ map: pantTex, toneMapped: false })); pantMesh.position.set(0, 1.2 + PH / 2, 0.16); pantalla.add(pantMesh);
  const marcoLuz = new THREE.Mesh(new THREE.BoxGeometry(PW + 0.6, 0.06, 0.06), glow(0x9fe8ff, 3)); marcoLuz.position.set(0, 1.0, 0.2); pantalla.add(marcoLuz);
  const marcoLuz2 = marcoLuz.clone(); marcoLuz2.position.y = 1.4 + PH + 0.05; pantalla.add(marcoLuz2);
  const pant = { modo: 'logo', datos: {}, sucio: true };
  function fondoAzul(g, w, h, t) {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#06104a'); gr.addColorStop(1, '#1a4ad0'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.save(); g.globalAlpha = 0.25; for (let x = 0; x < w; x += 46) { g.fillStyle = (x / 46 | 0) % 3 ? '#5fd8ff' : '#ffffff'; g.fillRect(x + Math.sin(t + x) * 3, 0, 8, h); } g.restore();
  }
  function wrap(g, txt, x, y, maxW, lh) { const ws = String(txt).split(' '); const L = []; let c = ''; for (const p of ws) { const s = c ? c + ' ' + p : p; if (g.measureText(s).width > maxW && c) { L.push(c); c = p; } else c = s; } L.push(c); L.forEach((l, i) => g.fillText(l, x, y + (i - (L.length - 1) / 2) * lh)); }
  function pintarPantalla(t) {
    const g = pg, w = pantCanvas.width, h = pantCanvas.height, d = pant.datos;
    fondoAzul(g, w, h, t);
    if (pant.modo === 'info' && d.title) {
      g.fillStyle = 'rgba(6,16,70,0.85)'; g.fillRect(70, 60, w - 140, h - 120); g.strokeStyle = '#ff3fb4'; g.lineWidth = 8; g.strokeRect(70, 60, w - 140, h - 120);
      g.fillStyle = '#ffe066'; let fz = 70; g.font = `900 ${fz}px "Arial Black", Arial`; while (g.measureText(String(d.title)).width > w - 200 && fz > 30) { fz -= 4; g.font = `900 ${fz}px "Arial Black", Arial`; } g.textAlign = 'center'; g.textBaseline = 'top'; g.fillText(String(d.title), w / 2, 90);
      g.font = 'bold 42px Arial'; g.textBaseline = 'middle'; (d.rows || []).slice(0, 6).forEach(([k, v], i) => { g.textAlign = 'right'; g.fillStyle = '#9fd8ff'; g.fillText(k, w * 0.4 - 20, 250 + i * 76, w * 0.4 - 100); g.textAlign = 'left'; g.fillStyle = '#fff'; g.fillText(v, w * 0.4 + 20, 250 + i * 76, w * 0.6 - 110); });
    } else if (pant.modo === 'piramide') {
      g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#ffe066'; g.font = '900 64px "Arial Black", Arial'; g.fillText(String(d.tema || '').toUpperCase(), w / 2, 70);
      const filas = 5; for (let i = 0; i < filas; i++) { const ancho = 360 + i * 200, y = 160 + i * 120, x = (w - ancho) / 2; const vis = i < (d.pistas || []).length;
        g.fillStyle = vis ? '#ff3fb4' : '#0a1a5a'; g.strokeStyle = '#9fe8ff'; g.lineWidth = 5; g.beginPath(); g.roundRect(x, y, ancho, 100, 30); g.fill(); g.stroke();
        g.fillStyle = '#fff'; g.font = '900 50px Arial'; g.fillText(vis ? String(d.pistas[i]).toUpperCase() : String([25, 20, 15, 10, 5][i]), w / 2, y + 52); }
    } else if (pant.modo === 'texto') {
      g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#ffe066'; g.font = '900 56px "Arial Black", Arial'; g.fillText(String(d.titulo || '').toUpperCase(), w / 2, 110);
      g.fillStyle = '#fff'; g.font = '900 120px "Arial Black", Arial'; wrap(g, d.texto || '', w / 2, h / 2 + 40, w - 120, 130);
    } else if (pant.modo === 'video') {
      g.fillStyle = '#101820'; g.fillRect(100, 60, w - 200, h - 120); const gr = g.createRadialGradient(w / 2, h / 2, 40, w / 2, h / 2, 500); gr.addColorStop(0, '#3a5a7a'); gr.addColorStop(1, '#101820'); g.fillStyle = gr; g.fillRect(100, 60, w - 200, h - 120);
      const by = Math.sin(t * 2) * 6; g.fillStyle = '#c8e0ff'; g.fillRect(w * 0.62, 120, 260, 300); g.fillStyle = '#7a5a3a'; g.fillRect(w * 0.62, 420, 260, 40);
      g.fillStyle = '#2a8bff'; g.beginPath(); g.ellipse(w / 2, h - 60 + by, 230, 170, 0, Math.PI, 0); g.fill();
      g.fillStyle = '#e0b898'; g.beginPath(); g.arc(w / 2, h / 2 - 20 + by, 110, 0, 7); g.fill(); g.fillStyle = '#3a2a1a'; g.beginPath(); g.arc(w / 2, h / 2 - 60 + by, 112, Math.PI * 1.05, Math.PI * 1.95); g.fill();
      g.fillStyle = '#1a1a2a'; g.beginPath(); g.arc(w / 2 - 38, h / 2 - 25 + by, 11, 0, 7); g.arc(w / 2 + 38, h / 2 - 25 + by, 11, 0, 7); g.fill(); g.strokeStyle = '#8a3a2a'; g.lineWidth = 7; g.beginPath(); g.arc(w / 2, h / 2 + 15 + by, 38, 0.2, Math.PI - 0.2); g.stroke();
      g.fillStyle = '#ff2a2a'; g.beginPath(); g.arc(150, 110, 16, 0, 7); g.fill(); g.fillStyle = '#fff'; g.font = 'bold 40px Arial'; g.textAlign = 'left'; g.fillText('EN DIRECTO · VIDEOLLAMADA', 180, 112);
      g.textAlign = 'center'; g.font = '900 54px Arial'; g.fillText(d.nombre || 'El intruso', w / 2, h - 110);
    } else if (pant.modo === 'bote') {
      if (ctx.logoPantalla && ctx.logoPantalla.naturalWidth) { const i = ctx.logoPantalla, s = Math.min(300 / i.naturalWidth, 300 / i.naturalHeight); g.drawImage(i, w / 2 - i.naturalWidth * s / 2, 30, i.naturalWidth * s, i.naturalHeight * s); } else drawLogo(g, w / 2, 190, 420, t);
      g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = '900 150px "Arial Black", Arial'; g.lineWidth = 14; g.strokeStyle = '#123cc8'; g.strokeText(d.texto || '', w / 2, 560); g.fillStyle = '#fff'; g.fillText(d.texto || '', w / 2, 560);
    } else {
      if (ctx.logoPantalla && ctx.logoPantalla.complete && ctx.logoPantalla.naturalWidth) { const i = ctx.logoPantalla, s = Math.min((w * 0.7) / i.naturalWidth, (h * 0.8) / i.naturalHeight); g.drawImage(i, (w - i.naturalWidth * s) / 2, (h - i.naturalHeight * s) / 2, i.naturalWidth * s, i.naturalHeight * s); }
      else drawLogo(g, w * 0.5, h * 0.48, w * 0.62, t, ctx.logoOpts || {});
      if (ctx.banner) { g.font = '900 50px Arial'; g.textAlign = 'center'; g.fillStyle = '#fff'; g.strokeStyle = '#123cc8'; g.lineWidth = 8; g.strokeText(ctx.banner, w / 2, h - 50); g.fillText(ctx.banner, w / 2, h - 50); }
    }
    pantTex.needsUpdate = true;
  }
  // ---------- logo circular rosa en la pared izquierda ----------
  const logoTex = canvasTex(1024, 1024, (g, w) => drawLogo(g, w / 2, w / 2, w * 1.25));
  const logoPared = new THREE.Mesh(new THREE.CircleGeometry(2.3, 64), new THREE.MeshBasicMaterial({ map: logoTex, transparent: true, toneMapped: false }));
  logoPared.position.set(-11.6, 4.4, -9.4); logoPared.lookAt(0, 4.4, 2); root.add(logoPared);
  const logoPared2 = logoPared.clone(); logoPared2.position.set(11.6, 4.4, -9.4); logoPared2.lookAt(0, 4.4, 2); root.add(logoPared2);
  function refrescarLogos() { const { g } = logoTex.userData; g.clearRect(0, 0, 1024, 1024); if (ctx.logoPantalla && ctx.logoPantalla.naturalWidth) { const i = ctx.logoPantalla, s = Math.min(900 / i.naturalWidth, 900 / i.naturalHeight); g.drawImage(i, 512 - i.naturalWidth * s / 2, 512 - i.naturalHeight * s / 2, i.naturalWidth * s, i.naturalHeight * s); } else drawLogo(g, 512, 512, 1280); logoTex.needsUpdate = true; }

  // ---------- anillos de neón colgando del techo ----------
  const anillos = [];
  [[4.2, 11.2, 0.35], [3.0, 10.4, -0.25], [5.4, 12.0, 0.15]].forEach(([r, y, inc], i) => {
    const a = new THREE.Mesh(new THREE.TorusGeometry(r, 0.09, 10, 120), glow(pal.neon, 3.2)); a.position.set(-0.5 + i * 0.5, y, -3); a.rotation.x = Math.PI / 2 + inc; a.rotation.y = inc * 0.6; root.add(a);
    const halo = new THREE.Mesh(new THREE.TorusGeometry(r, 0.28, 8, 120), new THREE.MeshBasicMaterial({ color: 0x5fb8ff, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false })); a.add(halo);
    anillos.push({ a, inc, fase: i * 1.7 });
  });
  for (let k = 0; k < 3; k++) { const cab = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 4, 4), mat(0x666a77)); cab.position.set(-3 + k * 3, 13.5, -3); root.add(cab); }
  // truss del techo
  const cel = mat(0x5a6070, { metalness: 0.8, roughness: 0.3 });
  for (let k = 0; k < 3; k++) { const t = new THREE.Mesh(new THREE.BoxGeometry(32, 0.3, 0.3), cel); t.position.set(0, 14.5, -9 + k * 7); root.add(t); }

  // ---------- atril blanco del presentador ----------
  const pres = new THREE.Group(); pres.position.set(0, 0.18, -5.6); root.add(pres);
  const atrilTex = canvasTex(256, 512, (g, w, h) => { g.fillStyle = '#f6f8fc'; g.fillRect(0, 0, w, h); g.fillStyle = '#ff3fb4'; g.fillRect(0, h - 30, w, 12); drawLogo(g, w / 2, h * 0.42, 300); });
  const pA = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.2, 0.7), [mat(0xf2f4f8), mat(0xf2f4f8), mat(0xffffff), mat(0xf2f4f8), new THREE.MeshStandardMaterial({ map: atrilTex, roughness: 0.35 }), mat(0xf2f4f8)]); pA.position.y = 0.6; pA.castShadow = true; pres.add(pA);
  const pTop = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.08, 0.9), mat(0xffffff, { roughness: 0.15 })); pTop.position.y = 1.24; pres.add(pTop);
  const tablet = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.35), glow(0x5fd8ff, 1.2)); tablet.position.set(0.3, 1.3, 0); tablet.rotation.x = -0.3; pres.add(tablet);
  const luzAtril = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.05, 0.05), glow(0xff3fb4, 2.5)); luzAtril.position.set(0, 0.06, 0.36); pres.add(luzAtril);
  const presentador = figure({ body: 0xe85a8a, legs: 0x1a1f33, skin: 0xd9b08c, hair: 0x2a1a10 }); presentador.position.set(0, 0.18, -6.3); root.add(presentador);

  // ---------- sofás amarillos capitoné ----------
  const capTex = canvasTex(512, 256, (g, w, h) => { g.fillStyle = '#ffc61a'; g.fillRect(0, 0, w, h); g.strokeStyle = '#d99a00'; g.lineWidth = 3; for (let x = -h; x < w + h; x += 48) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x + h, h); g.stroke(); g.beginPath(); g.moveTo(x + h, 0); g.lineTo(x, h); g.stroke(); } g.fillStyle = '#a87000'; for (let y = 0; y <= h; y += 48) for (let x = (y / 48 % 2) * 24; x <= w; x += 48) { g.beginPath(); g.arc(x, y, 5, 0, 7); g.fill(); } });
  capTex.wrapS = capTex.wrapT = THREE.RepeatWrapping;
  const mSofa = new THREE.MeshStandardMaterial({ color: 0xffffff, map: capTex, roughness: 0.65 }), mSofaL = new THREE.MeshStandardMaterial({ color: 0xffc61a, roughness: 0.6 });
  const sofas = []; const figs = []; const marcasSofa = [];
  function crearSofa(x, z, ry, equipo) {
    const g = new THREE.Group(); g.position.set(x, 0.18, z); g.rotation.y = ry; root.add(g);
    const asiento = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.45, 1.1), mSofa); asiento.position.set(0, 0.32, 0); g.add(asiento);
    const cojin = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.16, 1.0), mSofaL); cojin.position.set(0, 0.62, 0.04); g.add(cojin);
    const resp = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.95, 0.35), mSofa); resp.position.set(0, 0.95, -0.45); g.add(resp);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 3.6, 16), mSofaL); top.rotation.z = Math.PI / 2; top.position.set(0, 1.42, -0.45); g.add(top);
    for (const sx of [-1, 1]) { const br = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.6, 1.1), mSofa); br.position.set(sx * 1.85, 0.6, 0); g.add(br); const rol = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.1, 16), mSofaL); rol.rotation.x = Math.PI / 2; rol.position.set(sx * 1.85, 0.92, 0); g.add(rol); }
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    const cols = equipo === 0 ? [[0x2a6bff, 0x223355], [0xffffff, 0x333344], [0x9a3aff, 0x202024]] : [[0xff3fb4, 0x223355], [0x33c87a, 0x202024], [0xffd21a, 0x334477]];
    const skins = [0xd9b08c, 0xc8a07a, 0xe0b898];
    // concursante de pie delante del sofá; famosos sentados
    const c = figure({ body: cols[0][0], legs: cols[0][1], skin: skins[equipo], hair: 0x2a1a10 }); c.position.set(0, 0, 1.25); g.add(c);
    const f1 = figure({ body: cols[1][0], legs: cols[1][1], skin: skins[(equipo + 1) % 3], hair: 0x5a3a20, seated: true }); f1.position.set(-0.9, 0.62, 0.05); g.add(f1);
    const f2 = figure({ body: cols[2][0], legs: cols[2][1], skin: skins[(equipo + 2) % 3], hair: 0x101010, seated: true }); f2.position.set(0.9, 0.62, 0.05); g.add(f2);
    // tira de luz del color del equipo bajo el sofá
    const tira = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.05, 0.05), glow(equipo === 0 ? 0x2a8bff : 0xff3fb4, 3)); tira.position.set(0, 0.06, 0.58); g.add(tira);
    sofas.push({ g, tira }); figs.push(c, f1, f2);
  }
  crearSofa(-6.2, -5.2, 0.55, 0); crearSofa(6.2, -5.2, -0.55, 1);

  // ---------- focos móviles ----------
  const focos = [];
  const coneGeo = new THREE.ConeGeometry(1.2, 13, 24, 1, true); coneGeo.translate(0, -6.5, 0);
  for (let i = 0; i < 10; i++) {
    const piv = new THREE.Group(); piv.position.set(-13 + i * 2.9, 14, -9 + (i % 3) * 5); root.add(piv);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.5), mat(0x222228)); piv.add(cab);
    const cone = new THREE.Mesh(coneGeo, new THREE.MeshBasicMaterial({ color: i % 3 ? 0x5fd8ff : 0xffffff, transparent: true, opacity: 0.05, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); piv.add(cone);
    focos.push({ piv, cone, fase: i * 0.8 });
  }
  const charcos = []; for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(new THREE.CircleGeometry(1.1, 32), new THREE.MeshBasicMaterial({ color: i % 2 ? 0x5fd8ff : 0xffffff, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false })); m.rotation.x = -Math.PI / 2; m.position.y = 0.2; root.add(m); charcos.push({ m, fase: i * 1.3 }); }

  // ---------- gradas con público ----------
  const grada = new THREE.Group(); grada.userData.publico = true; root.add(grada);
  for (let fila = 0; fila < 3; fila++) {
    const esc = new THREE.Mesh(new THREE.BoxGeometry(18, 0.5 * (1 + fila), 1.2), mat(0x10142a)); esc.position.set(0, 0.25 * (1 + fila), 13.5 + fila * 1.2); grada.add(esc);
    for (let k = 0; k < 13; k++) { const p = figure({ body: [0xff5a9a, 0x5a8aff, 0xffd34d, 0x8aff8a, 0xffffff][(k + fila) % 5], seated: true, scale: 0.9 }); p.position.set(-7.2 + k * 1.2 + (fila % 2) * 0.4, 0.5 * (1 + fila), 13.5 + fila * 1.2); p.rotation.y = Math.PI; grada.add(p); }
  }
  // ---------- paseo ----------
  const walker = figure({ body: 0xff3fb4, legs: 0x223355 }); walker.visible = false; root.add(walker);
  const marca = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.06, 8, 36), glow(0x33ff88, 3)); marca.rotation.x = Math.PI / 2; marca.visible = false; root.add(marca);
  const posFig = i => { const v = new THREE.Vector3(); figs[i].getWorldPosition(v); return v; };
  function bloqueado(x, z) {
    if (Math.hypot(x, z) > 15.5 || z < -12.5 || z > 12.5) return true;
    if (Math.abs(x) < 1.0 && Math.abs(z + 5.6) < 0.6) return true;
    for (const s of sofas) { const p = new THREE.Vector3(x, 0, z); s.g.worldToLocal(p); if (Math.abs(p.x) < 2.1 && p.z > -0.8 && p.z < 0.7) return true; }
    return false;
  }
  // ---------- confeti ----------
  let confeti = null;
  function celebrar() {
    if (confeti) root.remove(confeti);
    const n = 450, geo = new THREE.BufferGeometry(), pos = new Float32Array(n * 3), col = new Float32Array(n * 3), vel = [];
    const cs = [new THREE.Color(0xff3fb4), new THREE.Color(0x5fd8ff), new THREE.Color(0xffd21a), new THREE.Color(0xffffff)];
    for (let i = 0; i < n; i++) { pos.set([(Math.random() - 0.5) * 22, 12 + Math.random() * 6, (Math.random() - 0.5) * 16 - 2], i * 3); const c = cs[i % 4]; col.set([c.r, c.g, c.b], i * 3); vel.push(1 + Math.random() * 2); }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    confeti = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.15, vertexColors: true })); confeti.userData = { vel, t: 0 }; root.add(confeti);
  }
  // ---------- tema ----------
  function setTema(p) {
    pal = { ...PALETA_BASE, ...(p || {}) };
    scene.background.set(pal.fondo); scene.fog.color.set(pal.fondo);
    leds.forEach(l => { const { g, c } = l.tex.userData; pintaLED(g, c.width, c.height, pal, l.seed); l.tex.needsUpdate = true; });
    anillos.forEach(a => { a.a.material.emissive.set(pal.neon); });
    pintaBanda(); pant.sucio = true;
  }
  const saltos = new Map();
  let pantT = 0;
  function update(t, dt) {
    pantT += dt; if (pant.sucio || pantT > 0.15) { pintarPantalla(t); pant.sucio = false; pantT = 0; }
    focos.forEach(f => { f.piv.rotation.z = Math.sin(t * 0.7 + f.fase) * 0.5; f.piv.rotation.x = Math.cos(t * 0.5 + f.fase * 1.3) * 0.4; });
    charcos.forEach(c => c.m.position.set(Math.sin(t * 0.4 + c.fase) * 8, 0.2, Math.cos(t * 0.33 + c.fase * 2) * 6 - 1));
    anillos.forEach(a => { a.a.rotation.z = t * 0.15 + a.fase; a.a.position.y += Math.sin(t * 0.8 + a.fase) * 0.002; });
    leds.forEach((l, i) => { if (!l.plano) l.tex.offset.x = (t * 0.004 * (i % 2 ? 1 : -1)) % 1; });
    bandaTex.offset.x = (t * 0.01) % 1;
    presentador.rotation.y = Math.sin(t * 0.6) * 0.35;
    for (const [i, s] of saltos) { s.t += dt; const f = figs[i]; f.position.y = s.y0 + Math.abs(Math.sin(s.t * 9)) * 0.25; if (s.t > 1.2) { f.position.y = s.y0; saltos.delete(i); } }
    if (confeti) { const p = confeti.geometry.attributes.position; confeti.userData.t += dt; for (let i = 0; i < p.count; i++) { p.setX(i, p.getX(i) + Math.sin(t * 3 + i) * dt * 0.5); p.setY(i, p.getY(i) - confeti.userData.vel[i] * dt); } p.needsUpdate = true; if (confeti.userData.t > 9) { root.remove(confeti); confeti = null; } }
  }
  setTema(null);
  return {
    root, update, setTema, celebrar, presentador, figs, sofas, walker, marca, posFig, bloqueado, pantallaObj: pantalla, reflector,
    pantalla(modo, datos = {}) { pant.modo = modo; pant.datos = datos; pant.sucio = true; },
    banda(txt) { bandaTxt = txt || '25 palabras'; pintaBanda(); },
    refrescarPantalla() { pant.sucio = true; refrescarLogos(); },
    luzEquipo(e, on) { const s = sofas[e]; if (s) s.tira.material.emissiveIntensity = on ? 6 : 3; },
    salta(i) { if (figs[i] && !saltos.has(i)) saltos.set(i, { t: 0, y0: figs[i].position.y }); },
    ocultarFig(i, v) { if (figs[i]) figs[i].visible = !v; },
    setReflejo(on) { refl.visible = on; tarima.material[1].opacity = on ? 0.7 : 1; },
    reset() { figs.forEach(f => { f.visible = true; }); saltos.clear(); pant.modo = 'logo'; pant.sucio = true; bandaTxt = '25 palabras'; pintaBanda(); sofas.forEach(s => s.tira.material.emissiveIntensity = 3); },
  };
}
