// 25 palabras 3D · El juego (fan-made). Navegación calcada del APK «¡Ahora Caigo! 3D» de Iker
// (plantilla /workspace/plantilla_menu): title → main → play/train/options/help/credits/historia.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { construirPlato } from './plato/plato.js';
import { drawLogo } from './plato/logo.js';
import { THEMES } from './temas.js';
import { me } from './lib/audio.js';
import { audioCtx, recursoEpoca, guardarSubido, quitarSubido, idb as idbMedia } from './lib/media.js';
import { $, esc, nuevoToken, check, Dt, Zi, ABORT, bubble, di, habla, hud, cerrarOverlay, hashtag, limpiarRotulos, toast, acciones, ocultarCreditos } from './juego/core.js';
import { jugarPrograma, entrenamiento, ETAPAS, creditos, PRUEBAS_ENTRENO, AYUDA, leerBote } from './juego/programa.js';
import { cerrarPanel } from './juego/ui.js';
import { PALABRAS, POOL_PRES } from './juego/ia.js';
import { CAPITULOS } from './juego/historia.js';
import { MONOLOGOS, TIPO_ICONO, TIPO_TXT } from './juego/monologos.js';
import { F, CONC, CHISTES, FAMOSOS, CONCURSANTES, INTRUSO } from './juego/frases.js';
const cerrarTablero = () => cerrarPanel();
import { cfg, guardarCfg, VERSION } from './cfg.js';
import * as M from './lib/menu_kit.js';

const params = new URLSearchParams(location.search);
if (params.get('vel')) window.__VEL = +params.get('vel');
if (params.has('auto')) { window.__AUTO = true; window.__AUTO_ELIGE = +(params.get('elige') || 0); }
bubble.nombre = cfg.presentador || 'Rafa Verbo';
const touch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

// ---------- render ----------
const renderer = new THREE.WebGLRenderer({ antialias: !touch, preserveDrawingBuffer: params.has('capture'), powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, touch ? 1.25 : 1.75)); renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0; renderer.shadowMap.enabled = true;
$('#app').appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.1, 220);
const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.35, 0.3, 0.85); composer.addPass(bloom); composer.addPass(new OutputPass());
let bloomOn = cfg.quality === 'alta';

// ---------- estado ----------
let temaId = params.get('tema') || localStorage.getItem('p25_theme') || 'normal'; if (!THEMES[temaId]) temaId = 'normal';
const ctx = { logoPantalla: null, logoOpts: null, banner: null };
const P = construirPlato(scene, ctx, renderer);
const etapaActual = () => ETAPAS[cfg.etapa] || ETAPAS.t2023;
async function cargarLogo() { const E = etapaActual(); ctx.logoOpts = E.logo || null; const r = await recursoEpoca('logo', E); if (!r) { ctx.logoPantalla = null; P.refrescarPantalla(); return null; } const img = new Image(); img.src = r.url; await img.decode().catch(() => {}); ctx.logoPantalla = img; P.refrescarPantalla(); return r.url; }
const LUCES = { azul: { led: '#2a6bff', led2: '#06164a', neon: 0xdff4ff }, rosa: { led: '#ff3fb4', led2: '#3a0430', neon: 0xffc0e8 }, blanco: { led: '#c8d8ff', led2: '#1a2040', neon: 0xffffff } };
function aplicarTema(id, guardar = true) {
  temaId = id; const T = THEMES[id] || THEMES.normal; let pal = T.paleta ? { ...T.paleta } : {};
  if (LUCES[cfg.platoLuz]) pal = { ...pal, ...LUCES[cfg.platoLuz] };
  P.setTema(pal); ctx.banner = T.banner || null; P.refrescarPantalla();
  if (guardar) localStorage.setItem('p25_theme', id);
}

// ---------- cámara ----------
const CAMS = {
  general: [[0, 6.5, 15], [0, 3, -6]], pantalla: [[0, 3.6, -3], [0, 3.6, -13]], sofas: [[0, 3.2, 6], [0, 1.2, -5]], sofaA: [[-2.4, 2.3, -1.0], [-6.2, 1.1, -5.2]], sofaB: [[2.4, 2.3, -1.0], [6.2, 1.1, -5.2]],
  presentador: [[1.0, 2.6, -2.4], [0, 1.7, -6.3]], publico: [[0, 4, 4], [0, 1.5, 15]], banda: [[0, 2.5, 4], [0, 7.5, -15]], atriles: [[0, 3.2, 6], [0, 1.2, -5]],
};
const cam = { mode: 'menu', pos: new THREE.Vector3(0, 9, 26), look: new THREE.Vector3(0, 2, 0), tPos: new THREE.Vector3(0, 9, 26), tLook: new THREE.Vector3(0, 2, 0), yaw: 0, pitch: 0.3 };
function show(pos, look, inmediato = false) { cam.mode = 'show'; cam.tPos.set(...pos); cam.tLook.set(...look); if (inmediato) { cam.pos.copy(cam.tPos); cam.look.copy(cam.tLook); } }
const camara = n => { const c = CAMS[n] || CAMS.general; show(c[0], c[1]); };
function camConc(i) { const v = P.posFig(i); show([v.x * 0.4, 2.4, v.z + 5], [v.x, 1.3, v.z]); }
let drag = null;
renderer.domElement.addEventListener('pointerdown', e => { drag = { id: e.pointerId, x: e.clientX, y: e.clientY }; });
addEventListener('pointermove', e => { if (!drag || drag.id !== e.pointerId) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY; cam.yaw -= dx * 0.006; cam.pitch = Math.max(-0.3, Math.min(1.1, cam.pitch + dy * 0.004)); });
addEventListener('pointerup', e => { if (drag && drag.id === e.pointerId) drag = null; });
const keys = {}; addEventListener('keydown', e => { keys[e.code] = true; }); addEventListener('keyup', e => { keys[e.code] = false; });
const joy = { x: 0, y: 0 }; { const J = $('#joy'), K = $('#knob'); let id = null; const mv = e => { const r = J.getBoundingClientRect(); let x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2); const d = Math.hypot(x, y), m = r.width / 2 - 10; if (d > m) { x *= m / d; y *= m / d; } K.style.transform = `translate(${x}px,${y}px)`; joy.x = x / m; joy.y = y / m; };
  J.addEventListener('pointerdown', e => { id = e.pointerId; J.setPointerCapture(id); mv(e); e.stopPropagation(); }); J.addEventListener('pointermove', e => { if (e.pointerId === id) mv(e); });
  const up = e => { if (e.pointerId === id) { id = null; joy.x = joy.y = 0; K.style.transform = ''; } }; J.addEventListener('pointerup', up); J.addEventListener('pointercancel', up); }
let alLlegar = null;
function modoPaseo(on) { cam.mode = on ? 'walk' : cam.mode; $('#joy').classList.toggle('hidden', !(on && touch)); if (on) { P.walker.visible = true; cam.yaw = 0; cam.pitch = 0.3; } }
function pistaTxt(t) { const h = $('#hint'); h.textContent = t; h.classList.toggle('hidden', !t); }

// ---------- cabecera 3D (o el vídeo propio) ----------
let limpiarSkip = null;
async function cabecera3D() {
  const t = nuevoTokenLocal(); document.body.classList.add('en-cabecera'); $('#btnSkip').classList.remove('hidden');
  me.stopMusic(); let audio = null;
  const mus = await recursoEpoca('musica', etapaActual());
  if (mus) { audio = new Audio(mus.url); audio.volume = cfg.music ? cfg.musicVol : 0; audio.play().catch(() => {}); } else me.music('menu');
  const logo = $('#cabLogo'); logo.src = logoDataURL(1000, 640);
  const tomas = [[[-12, 1.2, 8], [0, 9, -6], [-4, 2, 10]], [[10, 9, 10], [0, 1, -5], [5, 3, 13]], [[0, 0.6, 4], [0, 3.6, -13], [0, 3, -2]], [[13, 3, 2], [0, 10.5, -3], [8, 6, 6]], [[0, 12, 14], [0, 2, -5], [0, 6, 10]]];
  let saltar = false; limpiarSkip = () => { saltar = true; };
  try {
    for (const [a, look, b] of tomas) {
      if (saltar) break; $('#fx-flash').style.opacity = 0.9; me.play('pop'); setTimeout(() => $('#fx-flash').style.opacity = 0, 90);
      show(a, look, true); cam.tPos.set(...b); cam.tLook.set(...look); P.luces.vel = 3;
      for (let k = 0; k < 16 && !saltar; k++) await Dt(100);
    }
    if (!saltar) { logo.classList.add('on'); me.play('banner'); for (let k = 0; k < 28 && !saltar; k++) await Dt(100); }
  } finally {
    logo.classList.remove('on'); P.luces.vel = 1; limpiarSkip = null; document.body.classList.remove('en-cabecera'); $('#btnSkip').classList.add('hidden');
    if (audio) { let v = audio.volume; const iv = setInterval(() => { v -= 0.08; audio.volume = Math.max(0, v); if (v <= 0) { audio.pause(); clearInterval(iv); } }, 80); }
    me.stopMusic(); void t;
  }
}
const nuevoTokenLocal = () => 0;
async function videoCabecera() {
  const rec = await idbMedia.get('video:cabecera'); if (!rec || !rec.blob) return false;
  const url = URL.createObjectURL(rec.blob); const box = $('#video'), v = box.querySelector('video');
  return Zi(new Promise(res => {
    let hecho = false; const fin = () => { if (hecho) return; hecho = true; v.pause(); v.removeAttribute('src'); v.load(); box.classList.add('hidden'); $('#btnSkip').classList.add('hidden'); URL.revokeObjectURL(url); limpiarSkip = null; res(true); };
    v.onended = fin; v.onerror = fin; limpiarSkip = fin; v.src = url; v.volume = cfg.music ? cfg.musicVol : 0; box.classList.remove('hidden'); $('#btnSkip').classList.remove('hidden');
    v.play().catch(() => { v.muted = true; v.play().catch(fin); });
  }));
}

// ---------- API para los flujos de juego ----------
const camPresentador = () => CAMS.presentador;
let camFija = null;
const api = {
  P: () => P, tema: () => temaId,
  cam: (n, arg) => { if (camFija) return; if (n === 'conc') camConc(arg); else camara(n); },
  setEtapa(id) { ctx.logoOpts = ETAPAS[id]?.logo || null; P.refrescarPantalla(); },
  async cabecera() { if (cfg.cabecera === 'video' && await videoCabecera()) return; return cabecera3D(); },
  paseo(i) {
    P.ocultarFig(i, true); P.walker.position.set(0, 0.18, 9); P.walker.rotation.y = Math.PI;
    const dest = P.posFig(i); dest.y = 0.18; P.marca.position.set(dest.x, 0.24, dest.z); P.marca.visible = true;
    cam.pos.set(0, 3.5, 16); modoPaseo(true);
    di(F.paseo, 6000); me.say(F.paseo);
    pistaTxt('🕹️ Camina hasta el aro verde de tu sofá · PC: WASD + ratón');
    acciones([{ label: 'Ir a mi sofá ▶', fn: () => { P.walker.position.set(dest.x, 0, dest.z); } }]);
    return Zi(new Promise(res => { alLlegar = () => { if (Math.hypot(P.walker.position.x - dest.x, P.walker.position.z - dest.z) < 0.9) { alLlegar = null; res(); } }; if (params.has('autopaseo') || window.__AUTO) setTimeout(() => { P.walker.position.set(dest.x, 0, dest.z); }, 300); }))
      .finally(() => { pistaTxt(''); acciones([]); P.marca.visible = false; P.walker.visible = false; primeraPersona = false; P.ocultarFig(i, false); $('#joy').classList.add('hidden'); camara('general'); });
  },
  orbita() { cam.mode = 'menu'; },
  saltable(p) { $('#btnSkip').classList.remove('hidden'); return Zi(Promise.race([p, new Promise(r => { limpiarSkip = () => r('skip'); })])).finally(() => { limpiarSkip = null; $('#btnSkip').classList.add('hidden'); me.stopVoice(); }); },
  marcador(html) { const m = $('#marcador'); if (!html) { m.classList.add('hidden'); return; } m.innerHTML = html; m.classList.remove('hidden'); },
  monologo: (id, enPrograma = false) => monologo(id, enPrograma),
  iniciar: m => iniciar(m), menu: (p = 'main') => irMenu(p),
};

// ---------- MENÚ (plantilla del APK; el plató es el de 25 palabras) ----------
let pantalla = 'title';
const VOLVER = { title: null, main: 'title', play: 'main', train: 'play', options: 'main', help: 'main', credits: 'main', concursantes: 'options', canciones: 'options', monologos: 'play' };
M.setSonidoTecla(() => me.play('tecla'));
function logoDataURL(w = 900, h = 560) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
  if (ctx.logoPantalla && ctx.logoPantalla.complete && ctx.logoPantalla.naturalWidth) { const i = ctx.logoPantalla; const s = Math.min((w - 40) / i.naturalWidth, (h - 20) / i.naturalHeight); g.drawImage(i, (w - i.naturalWidth * s) / 2, (h - i.naturalHeight * s) / 2, i.naturalWidth * s, i.naturalHeight * s); }
  else drawLogo(g, w * 0.5, h * 0.5, w * 0.78, 0.3, ctx.logoOpts || {});
  return c.toDataURL('image/png');
}
const guardar = () => { guardarCfg(); me.aplicarNiveles(); };
const siNo = (k, f) => M.siNo(cfg, k, v => { guardar(); f && f(v); });
const opciones = (k, l, f) => M.opciones(cfg, k, l, v => { guardar(); f && f(v); });
const slider = k => M.slider(cfg, k, guardar, () => me.play(k === 'publicoVol' ? 'aplausos' : 'tecla'));
let lineaMsg = '', probando = null, musicaMenu = false;

function irMenu(p = 'main') {
  nuevoToken(); me.stopAll(); cerrarOverlay(); cerrarTablero(); hud.show(false); pistaTxt(''); $('#bubble').classList.add('hidden');
  hist?.cerrar(); hist = null; alLlegar = null; P.walker.visible = false; P.marca.visible = false; $('#joy').classList.add('hidden'); primeraPersona = false; camFija = null;
  limpiarRotulos(); acciones([]); ocultarCreditos(); hashtag(''); api.marcador(null); $('#video').classList.add('hidden'); $('#topbar').classList.add('hidden'); $('#glights').classList.add('hidden');
  document.body.classList.remove('en-cabecera'); $('#cabLogo').classList.remove('on'); P.reset(); hud.sinTimer();
  cam.mode = 'menu'; if (!musicaMenu) { me.music('menu'); musicaMenu = true; }
  Lt(p);
}
function Lt(p) {
  pantalla = p; const m = $('#menu');
  const T = THEMES[temaId] || THEMES.normal; const E = etapaActual();
  if (p === 'title') return M.pantallaTitulo(m, { logo: logoDataURL(900, 640), sub: 'El juego', onStart: () => { me.play('banner'); irMenu('main'); } });
  const col = M.pantallaMenu(m, { logo: logoDataURL(), tag: temaId === 'normal' ? 'EL JUEGO · 3D · ' + E.corto : T.emoji + ' ' + (T.banner || 'Especial ' + T.name), version: VERSION, cls: ['options', 'concursantes', 'canciones'].includes(p) ? 'opts' : ['help', 'credits'].includes(p) ? 'text' : '' });
  const mbtn = M.mbtn, volver = d => M.volver(() => Lt(d));
  if (p === 'main') {
    col.append(mbtn('Jugar', 'Programa completo, entrenamiento, clásico…', 'gold', () => Lt('play')), mbtn('Opciones', 'Sonido, etapa, calidad gráfica, pantalla completa', '', () => Lt('options')),
      mbtn('La historia de 25 palabras', `${esc(cfg.presentador)} te cuenta la historia del programa`, '', () => iniciar('historia')), mbtn('Cómo se juega', 'Las reglas del concurso', '', () => Lt('help')), mbtn('Créditos', '', '', () => Lt('credits')));
    if (!matchMedia('(display-mode: standalone), (display-mode: fullscreen)').matches) col.append(mbtn('Instalar app', 'Juega sin conexión desde tu pantalla de inicio', 'inst', instalar));
  } else if (p === 'play') {
    col.append(mbtn('Programa completo', `Cabecera, ${E.repesca ? 'repesca, ' : ''}la apuesta, uno contra uno, pirámide, contrarreloj y las diez de últimas · bote ${M.esc(euros0(leerBote()))}`, 'gold', () => iniciar('programa')), mbtn('Entrenamiento', 'Practica cada prueba por separado', '', () => Lt('train')),
      mbtn('Clásico', 'El estreno de diciembre de 2022: sin repesca y con El intruso', '', () => iniciar('clasico')), mbtn('Explorar el plató', 'Pasea libremente por el plató 3D', '', () => iniciar('explorar')),
      mbtn('Monólogos del presentador', 'Con el público, al teléfono y las normas', '', () => Lt('monologos')), M.h2('Programa especial'),
      M.rejillaTemas(THEMES, temaId, k => { aplicarTema(k); Lt('play'); }), volver('main'));
  } else if (p === 'train') {
    col.append(M.h2('Entrenamiento (sin bote)'));
    Object.entries(PRUEBAS_ENTRENO).forEach(([k, [t, s]], i) => col.append(mbtn(t, s, i === 0 ? 'gold' : '', () => iniciar('entreno:' + k))));
    const r = document.createElement('div'); r.className = 'mrow'; const b = document.createElement('button');
    const pinta = () => { b.className = 'tbtn' + (sinTiempo ? ' sel' : ''); b.innerHTML = sinTiempo ? '<span>♾️</span>Tiempo ilimitado' : '<span>⏱️</span>Con reloj'; }; pinta();
    b.onclick = e => { e.stopPropagation(); sinTiempo = !sinTiempo; pinta(); me.play('tecla'); };
    r.append(b, volver('play')); col.append(r);
  } else if (p === 'options') {
    col.append(M.h2('Opciones'));
    col.append(M.fila('📺 Etapa', ...opciones('etapa', Object.values(ETAPAS).map(e => [e.id, e.corto]), () => { cargarLogo().then(() => Lt('options')); })));
    col.append(M.nota(`${E.nombre}: 2 concursantes con 2 famosos cada uno, bote de 250.000 € que sube 5.000 € por programa. ${E.repesca ? 'Empieza con La repesca por el sitio del equipo rosa.' : 'Sin repesca y con El intruso por videollamada.'} Bote actual: ${euros0(leerBote())}.`, 'mtext'));
    col.append(M.fila('📹 El intruso (videollamada)', siNo('intruso')), M.nota('Actívalo para jugar El intruso también en la etapa de 2023 (en el estreno siempre aparece).', 'mtext'));
    col.append(M.bloque('💰 Bote', M.linea(`Bote acumulado: <b>${euros0(leerBote())}</b> · ${localStorage.getItem('p25_estado') === 'campeon' ? 'eres el campeón: mañana no juegas la repesca' : 'el próximo programa empiezas en la repesca'}`), M.botones([{ t: '↺ Reiniciar bote y repesca', fn: () => { localStorage.removeItem('p25_bote'); localStorage.removeItem('p25_estado'); toast('Bote reiniciado a 250.000 €'); Lt('options'); } }])));
    col.append(M.fila('🎵 Música', siNo('music'), slider('musicVol')));
    col.append(M.fila('🎬 Cabecera', ...opciones('cabecera', [['video', 'Mi vídeo'], ['3d', 'Plató 3D']])));
    const cab = M.bloque('🎶 Música de la cabecera'); col.append(cab); pintarMusicaCab(cab);
    col.append(M.fila('🔊 Efectos', siNo('sfx'), slider('sfxVol')));
    const pub = M.bloque('', M.fila('👏 Público', siNo('publico'), slider('publicoVol')), M.fila('👥 Público en las gradas', siNo('gradas', aplicarGradas)), M.nota('Aplausos, «ooh» y risas del público. Son sonidos sintetizados por el propio juego (no son grabaciones).')); pub.querySelector('.olabel').remove(); col.append(pub);
    col.append(M.fila('🎤 Voz del presentador', siNo('voz')), M.fila('📖 El presentador lee las pistas', siNo('lee')), M.fila('⏩ Velocidad de lectura', ...opciones('leeVel', [['normal', 'Normal'], ['rapida', 'Rápida']])),
      M.fila('😄 Chistes del presentador', siNo('chistes')), M.fila('🎭 Monólogo del presentador', siNo('monologo')));
    col.append(M.bloque('👥 Concursantes', M.linea(`${cfg.nombre ? 'Tú: ' + esc(cfg.nombre) + (cfg.profesion ? ' · ' + esc(cfg.profesion) : '') : 'Tú: sin nombre'} · Famosos: ${FAMOSOS.slice(0, 3).map(x => esc(x.nombre)).join(', ')}… · Presenta: ${esc(cfg.presentador)}`), M.botones([{ t: '✏️ Nombres y profesiones', sel: true, full: true, fn: () => Lt('concursantes') }])));
    col.append(M.bloque('💡 Luces del plató', M.botones([['auto', 'Auto'], ['azul', 'Azul'], ['rosa', 'Rosa'], ['blanco', 'Blanco']].map(([v, t]) => ({ t, sel: cfg.platoLuz === v, fn: () => { cfg.platoLuz = v; guardar(); aplicarTema(temaId); Lt('options'); } })))));
    col.append(M.fila('🪞 Reflejos del suelo', siNo('reflejo', aplicarCalidad)));
    col.append(M.nota('Plató de 2022: paredes de LED azules con franjas, banda curva con la prueba o el bote, anillos de neón en el techo, logo rosa, sofás amarillos capitoné y suelo negro reflectante con el «25». ' + (cfg.platoLuz === 'auto' ? 'Las luces automáticas siguen los colores de cada especial.' : 'Las luces fijas se mantienen en todos los especiales.'), 'mtext'));
    const calidad = M.fila('✨ Calidad gráfica', ...opciones('quality', [['baja', 'Baja'], ['media', 'Media'], ['alta', 'Alta']], aplicarCalidad)); col.append(calidad);
    getCanciones().then(l => { const b = M.bloque('🎵 Mis canciones', M.linea(l.length ? `${l.length} ${l.length === 1 ? 'canción' : 'canciones'}: ${esc(l.map(x => x.name).join(', '))}` : 'Sin canciones: suena la música del juego'), M.botones([{ t: '🎵 Gestionar mis canciones', sel: true, full: true, fn: () => Lt('canciones') }]), M.nota('Sube canciones desde tu dispositivo (se quedan solo en él). Suenan de fondo durante las pruebas.')); col.insertBefore(b, calidad); });
    const standalone = matchMedia('(display-mode: standalone), (display-mode: fullscreen)').matches;
    const fs = M.botones([{ t: standalone ? 'Siempre (app)' : document.fullscreenElement ? 'Salir' : 'Activar', sel: !!document.fullscreenElement, disabled: standalone, fn: async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else { await document.documentElement.requestFullscreen({ navigationUI: 'hide' }); try { await screen.orientation.lock('landscape'); } catch (x) { /* */ } } } catch (x) { toast('Tu navegador no permite pantalla completa aquí'); } setTimeout(() => Lt('options'), 300); } }]);
    col.append(M.fila('⛶ Pantalla completa', fs), M.nota(`Rendimiento actual: ${Math.round(fps)} fps. Si el juego va lento en tu móvil, elige calidad «Baja».`, 'mtext'), volver('main'));
  } else if (p === 'canciones') {
    col.append(M.h2('Mis canciones'));
    const lista = document.createElement('div'); lista.className = 'ocustom'; col.append(lista);
    getCanciones().then(l => { lista.innerHTML = ''; if (!l.length) lista.append(M.linea('Todavía no has subido ninguna canción.'));
      l.forEach((c, i) => lista.append(M.fila('🎵 ' + c.name, ...M.botones([{ t: '▶ Probar', fn: b => probar(URL.createObjectURL(c.blob), b) }, { t: '🗑 Quitar', fn: async () => { l.splice(i, 1); await idbMedia.put('canciones', l); await cargarCanciones(); Lt('canciones'); } }]).children)));
      lista.append(M.botones([{ t: '📂 Subir canción de mi dispositivo', sel: true, full: true, file: { accept: 'audio/*', onFile: async f => { l.push({ name: f.name.replace(/\.[^.]+$/, ''), blob: f }); await idbMedia.put('canciones', l); await cargarCanciones(); toast('✅ ¡Canción guardada en este dispositivo!'); Lt('canciones'); } } }]));
    });
    col.append(M.nota('Las canciones se quedan solo en este dispositivo; no se suben ni se comparten. Suenan de fondo durante las pruebas.'), volver('options'));
  } else if (p === 'concursantes') {
    col.append(M.h2('Concursantes'));
    const t = (k, ph, max) => M.texto(cfg, k, ph, max, () => { guardarCfg(); if (k === 'presentador') bubble.nombre = cfg.presentador || 'Rafa Verbo'; });
    col.append(M.fila('🙋 Tu nombre', t('nombre', 'Ej.: Iker', 18)), M.fila('💼 Profesión', t('profesion', 'Ej.: estudiante', 24)), M.fila('🎙️ Presentador', t('presentador', 'Rafa Verbo', 22)),
      M.fila('🪪 Presentar a los concursantes', siNo('presentaciones')));
    col.append(M.bloque('Famosos virtuales (inventados)', ...FAMOSOS.map(x => M.linea(`${x.emoji} <b>${esc(x.nombre)}</b> · ${esc(x.prof)} · voz ${x.voz}`))));
    col.append(M.bloque('Concursantes rivales', ...CONCURSANTES.map(x => M.linea(`${x.emoji} <b>${esc(x.nombre)}</b> · ${esc(x.prof)}`)), M.linea(`${INTRUSO.emoji} <b>${INTRUSO.nombre}</b> · ${INTRUSO.prof}`)));
    col.append(M.nota(`${cfg.presentador || 'Rafa Verbo'} te presentará al empezar el Programa completo. Tu nombre sale en el marcador y en los créditos.`), volver('options'));
  } else if (p === 'monologos') {
    col.append(M.h2('Monólogos del presentador'), mbtn('🎲 Al azar', 'Uno cualquiera (y luego «Siguiente»)', 'gold', () => iniciar('mono:azar')));
    const l = document.createElement('div'); l.className = 'monolist';
    MONOLOGOS.forEach(mo => { const b = document.createElement('button'); b.className = 'tbtn'; b.innerHTML = `<span>${TIPO_ICONO[mo.tipo]}</span><b>${esc(mo.titulo)}</b><small>${TIPO_TXT[mo.tipo]}</small>`; b.onclick = e => { e.stopPropagation(); me.play('tecla'); iniciar('mono:' + mo.id); }; l.appendChild(b); });
    col.append(l, M.nota(`${cfg.presentador} es un presentador virtual inventado, con voz sintética de Piper (davefx). Pulsa «Saltar ⏭» para terminar el monólogo.`, 'mtext'), volver('play'));
  } else if (p === 'help') {
    col.append(volver('main'), M.h2('Cómo se juega')); const d = document.createElement('div'); d.className = 'mtext'; d.innerHTML = AYUDA; col.append(d);
  } else if (p === 'credits') {
    col.append(volver('main'), M.h2('Créditos')); const d = document.createElement('div'); d.className = 'mtext creditos';
    d.innerHTML = M.htmlCreditos(creditos(null)) + `<p><b>Especial 300 suscriptores</b><br>Dedicado a los suscriptores del canal de YouTube «Ikeriano el campeón 2»</p><p class="small">Versión ${VERSION}</p><p class="small">Juego de fans sin ánimo de lucro. «25 palabras» y «25 Words or Less» son formatos de televisión de sus respectivos dueños; este juego no está afiliado a ninguna cadena ni productora. El presentador, los famosos y los concursantes son personajes virtuales inventados. Interfaz basada en el APK «¡Ahora Caigo! El juego 3D» de Iker.</p>`;
    col.append(d);
  }
}
const euros0 = n => String(Math.round(n || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €';
function probar(url, b) { if (probando) { probando.pause(); probando = null; if (b) b.textContent = '▶ Probar'; musicaMenu = false; me.music('menu'); musicaMenu = true; return; } me.stopMusic(); probando = new Audio(url); probando.volume = cfg.musicVol; probando.play().catch(() => {}); if (b) b.textContent = '⏹ Parar'; const a = probando; setTimeout(() => { if (probando === a) probar(null, b); }, 12000); }
async function pintarMusicaCab(o) {
  const E = etapaActual(); const mu = await recursoEpoca('musica', E); const lo = await recursoEpoca('logo', E); const vid = await idbMedia.get('video:cabecera');
  o.append(M.linea(mu ? `🎵 <b>${esc(mu.nombre)}</b> (${esc(E.corto)})` : 'Sin audio propio: suena la música del juego'),
    M.botones([{ t: '📂 Elegir audio de mi dispositivo', sel: true, full: true, file: { accept: 'audio/*', onFile: async f => { o.querySelector('.oname').textContent = '⏳ Cargando «' + f.name + '»…'; await guardarSubido('musica', E.id, f); lineaMsg = '✅ ¡Audio guardado en este dispositivo!'; Lt('options'); } } },
      { t: '▶ Probar', disabled: !mu, fn: b => probar(mu.url, b) }, { t: '🗑 Quitar', disabled: !mu || mu.origen !== 'subido', fn: async () => { await quitarSubido('musica', E.id); lineaMsg = 'Audio quitado: vuelve la música del juego'; Lt('options'); } }]));
  if (lineaMsg) { o.append(M.linea(lineaMsg, 'omsg')); lineaMsg = ''; }
  o.append(M.nota('El audio se queda solo en este dispositivo; no se sube ni se comparte. Cada etapa puede tener su propia cabecera.'));
  o.append(M.linea(`🎞️ Mi vídeo de cabecera: ${vid ? '<b>' + esc(vid.name) + '</b>' : 'ninguno'}`), M.botones([{ t: '📂 Elegir vídeo', file: { accept: 'video/*', onFile: async f => { await idbMedia.put('video:cabecera', { blob: f, name: f.name, type: f.type }); cfg.cabecera = 'video'; guardarCfg(); lineaMsg = '✅ ¡Vídeo guardado!'; Lt('options'); } } }, { t: '🗑 Quitar vídeo', disabled: !vid, fn: async () => { await idbMedia.del('video:cabecera'); cfg.cabecera = '3d'; guardarCfg(); Lt('options'); } }, { t: '▶ Ver cabecera', fn: async () => { $('#menu').classList.add('hidden'); nuevoToken(); musicaMenu = false; try { await api.cabecera(); } catch (x) { /* */ } irMenu('options'); } }]));
  o.append(M.linea(`🖼️ Logo propio (${esc(E.corto)}): ${lo && lo.origen === 'subido' ? '<b>' + esc(lo.nombre) + '</b>' : 'el del juego'}`), M.botones([{ t: '📂 Elegir imagen', file: { accept: 'image/*', onFile: async f => { await guardarSubido('logo', E.id, f); await cargarLogo(); Lt('options'); } } }, { t: '🗑 Quitar logo', disabled: !lo || lo.origen !== 'subido', fn: async () => { await quitarSubido('logo', E.id); await cargarLogo(); Lt('options'); } }]));
}
const getCanciones = async () => (await idbMedia.get('canciones')) || [];
async function cargarCanciones() { const l = await getCanciones(); me.setCanciones(l.map(c => URL.createObjectURL(c.blob))); }
let sinTiempo = false;
function instalar() {
  const m = M.modal($('#menu'), `<h2>Instalar 25 palabras</h2>${deferredPrompt ? '<p><button class="mbtn gold" id="instNow">📲 Instalar ahora</button></p>' : ''}<p><b>Android (Chrome):</b> menú ⋮ → «Instalar aplicación» o «Añadir a pantalla de inicio».</p><p><b>iPhone/iPad (Safari):</b> botón Compartir → «Añadir a pantalla de inicio».</p><p><b>PC (Chrome/Edge):</b> icono de instalar ⊕ en la barra de direcciones.</p><p>Una vez instalada funciona <b>sin conexión</b>.</p>`);
  const n = m.querySelector('#instNow'); if (n) n.onclick = async e => { e.stopPropagation(); const d = deferredPrompt; deferredPrompt = null; d.prompt(); m.remove(); };
}
let deferredPrompt = null; addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; });

// ---------- iniciar modos ----------
async function iniciar(modo) {
  const t = nuevoToken(); pantalla = 'juego'; me.stopAll(); musicaMenu = false; cerrarOverlay(); $('#menu').classList.add('hidden'); $('#topbar').classList.remove('hidden'); acciones([]); api.marcador(null);
  try {
    if (modo === 'historia') { await historia(t); return irMenu('main'); }
    if (modo === 'explorar') return await explorar(t);
    if (modo.startsWith('mono:')) return await monologo(modo.slice(5));
    if (modo.startsWith('entreno:')) { await habla(F.entreno); return await entrenamiento(modo.slice(8), api, { ilimitado: sinTiempo }); }
    await jugarPrograma(modo, api);
  } catch (e) { if (e !== ABORT) { console.error(e); toast('Error: ' + e.message, 5000); irMenu('play'); } }
}
async function explorar(t) {
  P.walker.position.set(0, 0.18, 9); modoPaseo(true); me.music('trilha'); hashtag('#25palabras');
  pistaTxt('🕹️ Joystick / WASD para andar · arrastra para mirar · 👁 cambia de cámara'); setTimeout(() => pistaTxt(''), 6000);
  di(F.explora, 4500); me.say(F.explora);
  let saludado = false; const v = new THREE.Vector3();
  for (;;) { await Dt(300, t); P.presentador.getWorldPosition(v); const d = Math.hypot(v.x - P.walker.position.x, v.z - P.walker.position.z); if (d < 2.6 && !saludado) { saludado = true; di(F.exploraSaludo, 3500); me.say(F.exploraSaludo); } if (d > 4) saludado = false; }
}
async function monologo(id, enPrograma = false) {
  const mo = !id || id === 'azar' ? MONOLOGOS[Math.floor(Math.random() * MONOLOGOS.length)] : MONOLOGOS.find(x => x.id === id) || MONOLOGOS[0];
  if (!enPrograma) { me.play('aplausos'); hashtag('#25palabras'); }
  camara(mo.cam);
  const fin = (async () => { for (const l of mo.lineas) { await habla(l, 3500); await Dt(400); } me.play('badumtss'); me.play('aplausos'); })();
  await api.saltable(fin);
  $('#bubble').classList.add('hidden');
  if (enPrograma) return;
  const i = MONOLOGOS.indexOf(mo); const sig = id === 'azar' ? 'azar' : MONOLOGOS[(i + 1) % MONOLOGOS.length].id;
  api.marcador(`🎭 «${esc(mo.titulo)}»`); api.orbita();
  acciones([{ label: 'Siguiente ▶', cls: 'gold', fn: () => iniciar('mono:' + sig) }, { label: 'Repetir', fn: () => iniciar('mono:' + mo.id) }, { label: 'Lista', fn: () => irMenu('monologos') }]);
  await Zi(new Promise(() => {}));
}

// ---------- barra superior (☰ 👁 💡 Saltar) ----------
let primeraPersona = false; const FIJAS = [null, 'general', 'pantalla', 'sofas', 'presentador', 'banda', 'publico'];
$('#btnMenu').onclick = e => { e.stopPropagation(); me.play('tecla'); irMenu(pantalla === 'juego' ? 'play' : 'main'); };
$('#btnCam').onclick = e => { e.stopPropagation(); me.play('tecla'); if (cam.mode === 'walk') { primeraPersona = !primeraPersona; toast(primeraPersona ? '👁 Primera persona' : '👁 Tercera persona', 1200); return; } camFija = FIJAS[(FIJAS.indexOf(camFija) + 1) % FIJAS.length]; if (camFija) camara(camFija); toast('👁 Cámara: ' + (camFija || 'automática'), 1200); };
$('#btnSkip').onclick = e => { e.stopPropagation(); if (limpiarSkip) limpiarSkip(); };
$('#btnLuces').onclick = e => { e.stopPropagation(); $('#glights').classList.toggle('hidden'); };
function atras() { if ($('#menu .modal')) { $('#menu .modal').remove(); return true; } if ($('#menu').classList.contains('hidden')) { $('#btnMenu').click(); return true; } const d = VOLVER[pantalla]; if (d) { me.play('tecla'); Lt(d); return true; } return false; }
window.__back = atras; addEventListener('keydown', e => { if (e.key === 'Escape') atras(); });

// ---------- consola de luces ----------
const luces = { vel: 1 }; P.luces = luces;
$('#glights').innerHTML = `<div class="gl-head"><b>💡 Luces del plató</b><button data-close>✕</button></div>
  <label>Velocidad focos <input type="range" min="0" max="3" step="0.1" value="1" id="glVel"></label>
  <label>Exposición <input type="range" min="0.4" max="1.6" step="0.05" value="1" id="glInt"></label>
  <div class="chips">${Object.entries(THEMES).map(([k, v]) => `<button data-gl="${k}">${v.emoji} ${esc(v.name)}</button>`).join('')}<button data-gl="flash">⚡ Fogonazo</button><button data-gl="confeti">🎉 Confeti</button></div>`;
$('#glights').addEventListener('click', e => { e.stopPropagation(); if (e.target.closest('[data-close]')) $('#glights').classList.add('hidden'); const b = e.target.closest('[data-gl]'); if (!b) return; const k = b.dataset.gl; if (THEMES[k]) aplicarTema(k, false); else if (k === 'flash') { me.play('pop'); $('#fx-flash').style.opacity = 0.8; setTimeout(() => $('#fx-flash').style.opacity = 0, 120); } else { P.celebrar(); me.play('aplausos'); } });
$('#glVel').oninput = e => { luces.vel = +e.target.value; }; $('#glInt').oninput = e => { renderer.toneMappingExposure = +e.target.value; };

// ---------- calidad / gradas ----------
function aplicarCalidad() { const q = cfg.quality; P.setReflejo(q !== 'baja' && cfg.reflejo); renderer.setPixelRatio(q === 'baja' ? 0.75 : q === 'media' ? Math.min(devicePixelRatio, touch ? 1 : 1.25) : Math.min(devicePixelRatio, 1.75)); renderer.shadowMap.enabled = q !== 'baja'; bloomOn = q === 'alta'; renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); }
function aplicarGradas() { P.root.traverse(o => { if (o.userData && o.userData.publico) o.visible = cfg.gradas; }); }

// ---------- modo historia (tarjeta azul 1/N, subtítulo «EL PRESENTADOR», ◄ ⏭ ►) ----------
let hist = null;
const INTRO_H = () => `¡Hola! Soy ${cfg.presentador || 'Rafa Verbo'}. Bienvenidos a la historia de 25 palabras. Empecemos por el principio.`;
const INTRO_H_FIJA = '¡Hola! Bienvenidos a la historia de 25 palabras. Empecemos por el principio.';
const FIN_H = 'Y esta ha sido la historia de 25 palabras. Ciento noventa y tres programas homenajeando a nuestra lengua. ¡Gracias por acompañarme!';
async function historia(t) {
  me.music('trilha'); hashtag('#25palabrasHistoria');
  const N = CAPITULOS.length; hist = M.interfazHistoria({ total: N, presentador: cfg.presentador || 'El presentador' });
  let idx = 0, mover = null;
  hist.on({ prev: () => mover && mover(Math.max(0, idx - 1)), next: () => mover && mover(idx + 1), skip: () => mover && mover('skip'), ir: i => mover && mover(i) });
  const leerH = async (texto, voz = texto) => {
    hist.subtitulo(texto); let destino = null;
    const pulsado = new Promise(r => { mover = d => { destino = d; r(); }; });
    const hablar = cfg.voz ? me.say(voz).then(() => Dt(1500, t)) : Dt(Math.max(3500, texto.length * 60), t);
    await Zi(Promise.race([hablar, pulsado])); me.stopVoice(); check(t);
    return destino;
  };
  camara('presentador'); P.pantalla('info', { title: 'LA HISTORIA', rows: [['Capítulos', String(N)], ['Estreno', '19-dic-2022']] });
  hist.mostrar(-1, { emoji: '📖', t: 'La historia de 25 palabras', rows: [['Capítulos', String(N)], ['Presenta', cfg.presentador || 'Rafa Verbo']] });
  let d = await leerH(INTRO_H(), INTRO_H_FIJA);
  idx = typeof d === 'number' ? d : 0;
  while (idx < N) {
    const c = CAPITULOS[idx]; camara(c.cam); P.pantalla('info', { title: c.t.toUpperCase(), rows: c.rows });
    hist.mostrar(idx, { emoji: c.emoji, t: c.t, rows: c.rows });
    d = await leerH(c.sub);
    idx = d === 'skip' || d == null ? idx + 1 : d;
  }
  P.pantalla('logo'); camara('presentador'); me.play('aplausos');
  hist.mostrar(N - 1, { emoji: '🔤', t: '¡Fin!', rows: [] });
  await leerH(FIN_H);
  hist.cerrar(); hist = null;
}

// ---------- frases para pregenerar las voces (tools/gen_voces.py) ----------
window.__frases = () => {
  const L = []; const add = (t, v = 'davefx', q = false) => { if (t && typeof t === 'string') L.push({ v, t: t.trim(), q }); };
  Object.values(F).forEach(t => add(t)); CHISTES.forEach(t => add(t)); MONOLOGOS.forEach(m => m.lineas.forEach(t => add(t)));
  CAPITULOS.forEach(c => add(c.sub)); [INTRO_H_FIJA, FIN_H].forEach(t => add(t));
  Object.values(THEMES).forEach(T => { add(T.saludo); (T.extra || []).forEach(x => add(x)); });
  const voces = ['daniela', 'sharvard', 'carlfm', 'ald'];
  Object.values(CONC).flat().forEach(t => voces.forEach(v => add(t, v)));
  // lo que dicen los famosos al adivinar: cada palabra del juego con las cuatro voces
  PALABRAS.forEach(w => voces.forEach(v => add(w.p, v)));
  // apuestas del concursante rival
  CONCURSANTES.forEach(c => { for (let n = 5; n <= 24; n++) add(`Lo hago con ${n} pistas.`, c.voz); });
  // pistas que lee el presentador (repesca, pirámide e intruso)
  POOL_PRES.forEach(w => w.c.forEach(p => add(p, 'davefx', true)));
  return L;
};

// ---------- bucle ----------
addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); });
const clock = new THREE.Clock(); let el = 0, fps = 60; const tmp = new THREE.Vector3();
function frame() {
  const dt = Math.min(clock.getDelta(), 0.05); el += dt; fps = fps * 0.95 + (1 / Math.max(dt, 0.001)) * 0.05;
  const W = P.walker;
  if (cam.mode === 'walk') {
    let x = joy.x, y = joy.y; if (keys.KeyW || keys.ArrowUp) y -= 1; if (keys.KeyS || keys.ArrowDown) y += 1; if (keys.KeyA || keys.ArrowLeft) x -= 1; if (keys.KeyD || keys.ArrowRight) x += 1;
    const m = Math.hypot(x, y);
    if (m > 0.1) {
      const sp = (keys.ShiftLeft ? 6 : 3.6) * Math.min(1, m) * dt; x /= Math.max(1, m); y /= Math.max(1, m);
      const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw);
      const dx = (fx * -y + rx * x) * sp, dz = (fz * -y + rz * x) * sp; const nx = W.position.x + dx, nz = W.position.z + dz;
      if (!P.bloqueado(nx, nz)) { W.position.x = nx; W.position.z = nz; } else if (!P.bloqueado(nx, W.position.z)) W.position.x = nx; else if (!P.bloqueado(W.position.x, nz)) W.position.z = nz;
      W.rotation.y = Math.atan2(dx, dz); W.children.forEach((c, i) => { if (i >= 5) c.rotation.x = Math.sin(el * 10) * 0.5 * (i % 2 ? 1 : -1); });
    }
    if (primeraPersona) { W.visible = false; cam.tPos.set(W.position.x, 1.65, W.position.z); cam.tLook.set(W.position.x - Math.sin(cam.yaw) * 5, 1.65 - cam.pitch * 3, W.position.z - Math.cos(cam.yaw) * 5); }
    else { W.visible = true; const l = 4.4 * Math.cos(cam.pitch * 0.6); cam.tPos.set(W.position.x + Math.sin(cam.yaw) * l, 1.8 + cam.pitch * 2.6, W.position.z + Math.cos(cam.yaw) * l); cam.tLook.set(W.position.x, 1.4, W.position.z); }
    alLlegar && alLlegar();
  } else if (cam.mode === 'menu') { const a = Math.sin(el * 0.06) * 0.75; cam.tPos.set(Math.sin(a) * 15, 6.5 + Math.sin(el * 0.2) * 1.2, Math.cos(a) * 15 + 3); cam.tLook.set(0, 3, -5); }
  const k = cam.mode === 'walk' ? 10 : 2.2; cam.pos.lerp(cam.tPos, Math.min(1, dt * k)); cam.look.lerp(cam.tLook, Math.min(1, dt * k));
  camera.position.copy(cam.pos); camera.lookAt(cam.look);
  P.update(el * luces.vel, dt);
  const b = $('#bubble');
  if (!b.classList.contains('hidden')) {
    if (performance.now() > bubble.hasta) b.classList.add('hidden');
    else { const obj = bubble.quien != null && P.figs[bubble.quien] ? P.figs[bubble.quien] : P.presentador; obj.getWorldPosition(tmp); tmp.y += 2.0; tmp.project(camera); const vis = tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1; b.style.left = Math.max(160, Math.min(innerWidth - 160, (tmp.x * 0.5 + 0.5) * innerWidth)) + 'px'; b.style.top = Math.max(80, vis ? (-tmp.y * 0.5 + 0.5) * innerHeight : 90) + 'px'; }
  }
  if (bloomOn) composer.render(); else renderer.render(scene, camera);
}
renderer.setAnimationLoop(frame);

// ---------- arranque ----------
aplicarTema(temaId, false); aplicarCalidad(); aplicarGradas(); cargarCanciones();
cargarLogo().then(() => { if ((pantalla === 'title' || pantalla === 'main') && !$('#menu').classList.contains('hidden')) Lt(pantalla); });
irMenu(params.has('main') ? 'main' : 'title');
document.addEventListener('visibilitychange', () => { if (document.hidden) me.stopMusic(); else if (!$('#menu').classList.contains('hidden')) { me.music('menu'); } });
addEventListener('pointerdown', function una() { if (!$('#menu').classList.contains('hidden')) me.music('menu'); removeEventListener('pointerdown', una); });
setTimeout(() => $('#loading').classList.add('hidden'), 600);
if (params.get('cam')) { $('#menu').classList.add('hidden'); show(...CAMS[params.get('cam')], true); }
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
window.__at = { P, api, iniciar, irMenu, Lt, camara, show, CAMS, aplicarTema, ETAPAS, ctx, cfg };
window.__plato = { ok: true, scene, renderer };
