// Las pruebas de 25 palabras: repesca, la apuesta, uno contra uno, la pirámide de pistas, el intruso,
// contrarreloj (todo puede cambiar) y las diez de últimas.
import { me } from '../lib/audio.js';
import { esc, Dt, Zi, Reloj, hud, banner, elegir, habla, hablaC, di, toast, azar, baraja, VEL, euros } from './core.js';
import { cfg } from '../cfg.js';
import { F, CONC } from './frases.js';
import * as IA from './ia.js';
import * as UI from './ui.js';

const AUTO = () => !!window.__AUTO;
const famosos = e => e.miembros.slice(1);
const nombreEq = e => e.nombre;
/** Frase fija de un personaje (pregenerada con su voz) */
const dice = (c, k) => hablaC(c, azar(CONC[k]));
/** Lo variable: el presentador lo dice con la voz del navegador (o solo bocadillo) */
async function presDice(t, ms = 2600) { di(t, ms + 800); if (!cfg.voz) return Dt(Math.max(1200, t.length * 45)); await Zi(Promise.race([me.say(t, 'davefx', { pregunta: true }), new Promise(r => setTimeout(r, ms + 3000))])); }
/** Una pista del presentador (las del grupo POOL_PRES están pregrabadas en voz/q) */
async function pistaPres(p) { di('🔎 ' + p, 2600); if (!cfg.voz || !cfg.lee) return Dt(900); await Zi(Promise.race([me.say(p, 'davefx', { pregunta: true }), new Promise(r => setTimeout(r, 2200))])); }
async function sumar(G, k, pts, motivo = '') { G.eq[k].puntos += pts; UI.marcador(G); if (pts > 0) { me.play('acierto'); me.play('aplausos'); toast(`+${pts} puntos · ${G.eq[k].nombre}${motivo ? ' · ' + motivo : ''}`, 2200); } await Dt(600); }
function intervalo(base) { return base; }

/**
 * Un turno de dar pistas para varias palabras.
 * o = { eq, giver, adivinos, palabras, maxPistas, seg, titulo, rapido }
 * Devuelve { aciertos, pistas, resto, todas }
 */
export async function turnoDar(G, o) {
  const { eq, giver, palabras, maxPistas = 25, seg = 45, titulo = '' } = o; const humanoDa = giver.humano; const humanoAdivina = !humanoDa && eq.humano;
  const adivinos = o.adivinos || eq.miembros.filter(m => m !== giver && !m.humano);
  const ws = palabras.map(w => ({ ...w, est: '', pistas: [], fallos: [] }));
  let act = 0, pistas = 0, aciertos = 0; G.turno = G.eq.indexOf(eq); UI.marcador(G);
  const reloj = new Reloj(o.ilimitado ? Infinity : seg, s => hud.timer(s)); hud.ronda(titulo);
  const pendientes = () => ws.filter(w => !w.est);
  const sig = () => { const p = ws.findIndex((w, i) => i > act && !w.est); act = p >= 0 ? p : ws.findIndex(w => !w.est); };
  const contador = () => `Pistas ${pistas}/${maxPistas} · Aciertos ${aciertos}/${ws.length}`;
  const acertada = async (w, quien) => { w.est = 'ok'; aciertos++; me.play('acierto'); if (quien && quien.fig != null) G.P.salta(quien.fig); toast(`✅ ${w.p.toUpperCase()}`, 1200); };
  let E = null;
  if (humanoDa) {
    E = UI.entrada({ modo: 'dar', titulo: titulo || 'Da pistas a tus famosos', placeholder: 'Escribe una pista (sin la palabra ni derivadas)', auto: () => { const w = ws[act]; const l = IA.pistasClaras(w).filter(p => !w.pistas.includes(IA.norm(p))); return l[0] || null; } });
  } else if (humanoAdivina) {
    E = UI.entrada({ modo: 'adivinar', titulo: titulo || `${giver.nombre} te da pistas`, placeholder: '¿Qué palabra es?', autoMs: 1600, auto: () => { const w = ws[act]; return w.pistas.length >= 2 && Math.random() < 0.55 ? w.p : undefined; } });
  }
  const pinta = () => { if (!E) { hud.ronda(`${titulo} · ${contador()}`); return; } E.contador(contador()); E.cartas(humanoDa ? UI.cartasHTML(ws, act) : `<div class="carta act"><small>${humanoAdivina ? 'Palabra ' + (ws.filter(w => w.est).length + 1) + ' de ' + ws.length : ''}</small>${humanoAdivina ? '¿?' : ''}</div>` + ws.map(w => `<i class="mini ${w.est}">${w.est === 'ok' ? '✔' : w.est === 'ko' ? '✖' : '•'}</i>`).join(''));
    const w = ws[act]; if (w) E.pistas(w.pistas.map((p, i) => p).concat(w.fallos.map(f => '✖ ' + f)));
    if (humanoDa && w) E.ideas(IA.pistasClaras(w).filter(p => !w.pistas.includes(IA.norm(p))).slice(0, 5)); };
  G.P.pantalla('texto', { titulo, texto: humanoDa ? 'Da pistas' : giver.nombre });
  reloj.start(); pinta();
  try {
    while (pendientes().length && !reloj.terminado && pistas < maxPistas) {
      const w = ws[act];
      if (humanoDa) {
        const r = await Promise.race([E.siguiente(), reloj.fin]);
        if (r === 'TIEMPO' || r === 'STOP') break;
        if (r.tipo === 'pasar') { if (pendientes().length > 1) { sig(); pinta(); } continue; }
        const trozos = IA.trocear(r.v); let validas = [];
        for (const t of trozos) { if (IA.esDerivada(t, w.p)) { me.play('fallo'); toast('⛔ ' + F.ilegal, 2200); continue; } if (pistas >= maxPistas) break; validas.push(t); pistas++; }
        if (!validas.length) { pinta(); continue; }
        w.pistas.push(...validas); pinta(); E.bloquear(true);
        // los famosos piensan y contestan
        const quien = adivinos[(w.pistas.length + w.fallos.length) % adivinos.length];
        await Dt(500);
        const g = IA.adivinar(w, w.pistas, { habil: quien.habil, fallos: w.fallos });
        if (g) { await hablaC(quien, g); if (IA.esCorrecta(g, w.p)) { await acertada(w, quien); sig(); } else { w.fallos.push(g); me.play('fallo'); } }
        else if (Math.random() < 0.4) await dice(quien, 'nose');
        E.bloquear(false); pinta();
      } else {
        // el que da pistas es virtual
        const l = IA.pistasClaras(w).filter(p => !w.pistas.includes(IA.norm(p)));
        if (!l.length) { w.est = 'ko'; sig(); pinta(); continue; }
        const p = l[0]; w.pistas.push(IA.norm(p)); pistas++;
        di(p, 1800, giver.fig, giver.nombre); if (cfg.voz && !o.rapido) me.say(p, giver.voz, { pregunta: true }); pinta();
        if (humanoAdivina) {
          const r = await Promise.race([E.siguiente(), Dt(2800), reloj.fin]);
          if (r === 'TIEMPO' || r === 'STOP') break;
          if (r && r.tipo === 'texto') { if (IA.esCorrecta(r.v, w.p)) { await acertada(w, G.yo); sig(); } else { w.fallos.push(r.v); me.play('fallo'); toast('✖ ' + r.v, 1000); } pinta(); continue; }
          if (r && r.tipo === 'pasar') { w.est = 'ko'; toast('⏭ Era «' + w.p + '»', 1500); sig(); pinta(); continue; }
          // el otro famoso también puede ayudar
          if (w.pistas.length >= 4 && adivinos.length && Math.random() < 0.35) { const q = adivinos[0]; const g = IA.adivinar(w, w.pistas, { habil: q.habil * 0.8, fallos: w.fallos }); if (g) { await hablaC(q, g); if (IA.esCorrecta(g, w.p)) { await acertada(w, q); sig(); } else w.fallos.push(g); pinta(); } }
        } else {
          await Dt(o.rapido ? 700 : 1300);
          const quien = adivinos[(w.pistas.length) % adivinos.length];
          const g = IA.adivinar(w, w.pistas, { habil: quien.habil, fallos: w.fallos });
          if (g) { if (o.rapido) di(g, 1200, quien.fig, quien.nombre); else await hablaC(quien, g); if (IA.esCorrecta(g, w.p)) { await acertada(w, quien); sig(); } else { w.fallos.push(g); } }
          await Dt(o.rapido ? 300 : 500); pinta();
        }
      }
    }
  } finally { reloj.stop(); UI.cerrarPanel(); G.turno = -1; }
  const resto = reloj.ilimitado ? 0 : Math.max(0, Math.round(reloj.rest)); hud.sinTimer();
  if (pistas >= maxPistas && pendientes().length) await habla(F.sinPistas); else if (reloj.terminado && pendientes().length && !reloj.ilimitado) await habla(F.tiempo);
  if (pendientes().length) toast('Faltaron: ' + pendientes().map(w => w.p).join(', '), 3000);
  return { aciertos, pistas, resto, todas: aciertos === ws.length };
}

// ---------- REPESCA ----------
/** Turnos alternos: el presentador da pistas cada vez más obvias (hasta 15); cuantas menos, más puntos. */
export async function repesca(G, rival, { palabras = 4 } = {}) {
  me.music('tension'); await banner('La repesca', 'Hasta 15 pistas por palabra · cuantas menos, más puntos'); G.P.banda('La repesca');
  await habla(F.repesca); G.cam('presentador');
  const jug = [{ ...G.yo, pts: 0 }, { ...rival, pts: 0 }]; const ws = IA.sacar(G, palabras, IA.esPool);
  for (let i = 0; i < ws.length; i++) {
    const k = i % 2, j = jug[k], w = ws[i]; const pistas = IA.pistasPresentador(w, 15); const dadas = [];
    G.cam(k === 0 ? 'sofaB' : 'sofaA');
    hud.ronda(`Repesca · palabra ${i + 1}/${ws.length} · juega ${j.nombre}`); await rotuloTurno(j.nombre);
    G.P.pantalla('texto', { titulo: 'REPESCA · ' + w.t, texto: '¿?' });
    let E = j.humano ? UI.entrada({ modo: 'adivinar', titulo: 'Repesca · tema: ' + w.t, placeholder: 'Tu respuesta', autoMs: 1500, auto: () => dadas.length >= 3 && Math.random() < 0.6 ? w.p : undefined }) : null;
    let pts = 0;
    for (let n = 0; n < pistas.length; n++) {
      dadas.push(pistas[n]); if (E) { E.pistas(dadas); E.contador(`Pista ${n + 1} · vale ${16 - (n + 1)} puntos`); }
      await pistaPres(pistas[n]);
      if (j.humano) {
        const r = await Promise.race([E.siguiente(), Dt(3800)]);
        if (r && r.tipo === 'texto') { if (IA.esCorrecta(r.v, w.p)) { pts = 16 - (n + 1); break; } me.play('fallo'); toast('✖ ' + r.v, 1000); }
        else if (r && r.tipo === 'pasar') break;
      } else {
        await Dt(900); const g = Math.random() < IA.confianza(n, j.habil * 0.75) ? IA.adivinar(w, dadas.map(IA.norm), { habil: j.habil }) : null;
        if (g) { await hablaC(j, g); if (IA.esCorrecta(g, w.p)) { pts = 16 - (n + 1); break; } me.play('fallo'); }
      }
    }
    if (E) UI.cerrarPanel();
    j.pts += pts; await presDice(pts ? `¡Correcto! Era ${w.p}. ${pts} puntos.` : `Era ${w.p}. Cero puntos.`);
    if (pts) me.play('acierto'); hud.ronda(`Repesca · ${jug[0].nombre} ${jug[0].pts} · ${jug[1].nombre} ${jug[1].pts}`);
  }
  const ganaYo = jug[0].pts >= jug[1].pts;
  await banner(ganaYo ? '¡Te quedas!' : 'Te vas a casa', `${jug[0].nombre} ${jug[0].pts} · ${jug[1].nombre} ${jug[1].pts}`);
  return ganaYo;
}
async function rotuloTurno(n) { toast('🎯 Turno de ' + n, 1500); await Dt(500); }

// ---------- LA APUESTA ----------
export async function apuesta(G) {
  me.music('trilha', { cancion: true }); G.P.banda('La apuesta'); await banner('La apuesta', '5 palabras · 45 segundos · apuesta a la baja desde 25 pistas'); await habla(F.apuesta);
  const h = G.h, r = 1 - h, rival = G.eq[r].miembros[0]; G.cam('sofas');
  let bid = 25, turnoH = Math.random() < 0.5, juega = null; const limite = 9 + Math.floor(Math.random() * 6);
  while (!juega) {
    hud.ronda(`La apuesta · ${bid} pistas`); G.P.pantalla('texto', { titulo: 'LA APUESTA', texto: bid + ' pistas' });
    if (turnoH) {
      const ops = [1, 2, 3].filter(d => bid - d >= 5).map(d => `<button class="ab" data-z="${bid - d}">Bajo a ${bid - d}</button>`).join('');
      const z = await elegir(`<div class="apuesta"><h3>LA APUESTA</h3><div class="ap-n">${bid}</div><p>pistas para 5 palabras. ${esc(rival.nombre)} dice que lo hace con ${bid}.</p><div class="ap-b">${ops}<button class="ab hz" data-z="hazlo">¡Hazlo tú!</button></div></div>`);
      if (z === 'hazlo') { juega = r; break; } bid = +z; turnoH = false; me.play('pop');
    } else {
      await Dt(700);
      if (bid - 1 < limite) { await dice(rival, 'hazlo'); juega = h; break; }
      bid = Math.max(limite, bid - (1 + Math.floor(Math.random() * 2))); await hablaC(rival, `Lo hago con ${bid} pistas.`); turnoH = true;
    }
  }
  const E = G.eq[juega]; await presDice(`${E.nombre} juega con ${bid} pistas.`); await habla(juega === h ? F.apuestaJuegas : F.apuestaJuegaRival);
  G.cam(juega === 0 ? 'sofaA' : 'sofaB');
  const res = await turnoDar(G, { eq: E, giver: E.miembros[0], palabras: IA.sacar(G, 5), maxPistas: bid, seg: 45, titulo: `La apuesta · ${bid} pistas`, rapido: !E.humano });
  if (res.todas) { await habla(F.apuestaOk); await sumar(G, juega, 75, 'La apuesta'); } else { me.play('ooh'); await habla(F.apuestaKo); }
}

// ---------- UNO CONTRA UNO ----------
export async function unoContraUno(G) {
  me.music('trilha', { cancion: true }); G.P.banda('Uno contra uno'); await banner('Uno contra uno', 'Misma palabra · una pista por turno · 25 puntos por ronda'); await habla(F.uno);
  const h = G.h, r = 1 - h;
  for (let ronda = 0; ronda < 3; ronda++) {
    const gH = G.eq[h].miembros[ronda], gR = G.eq[r].miembros[ronda]; const w = IA.sacar(G, 1)[0];
    await presDice(`Ronda ${ronda + 1}: ${gH.nombre} contra ${gR.nombre}.`); if (ronda === 0) await habla(F.unoTuDas); else if (ronda === 1) await habla(F.unoTuAdivinas);
    let turno = Math.random() < 0.5 ? h : r, valor = 25, ganador = -1; const pistas = [], fallos = []; const usadas = new Set();
    const disp = () => IA.pistasClaras(w).filter(p => !usadas.has(IA.norm(p)));
    let E = null;
    const abrir = () => { if (gH.humano) E = UI.entrada({ modo: 'dar', titulo: `Uno contra uno · ${w.p.toUpperCase()}`, placeholder: 'UNA pista', pasar: false, auto: () => disp()[0] || 'pista' }); else E = UI.entrada({ modo: 'adivinar', titulo: `Uno contra uno · ronda ${ronda + 1}`, placeholder: '¿Qué palabra es?', pasar: true, autoMs: 1400, auto: () => pistas.length >= 2 && Math.random() < 0.6 ? w.p : undefined }); };
    abrir(); G.P.pantalla('texto', { titulo: 'UNO CONTRA UNO', texto: valor + ' puntos' });
    for (let k = 0; k < 12 && ganador < 0; k++) {
      G.turno = turno; UI.marcador(G); hud.ronda(`Uno contra uno · ronda ${ronda + 1}/3 · vale ${valor}`); G.cam(turno === 0 ? 'sofaA' : 'sofaB');
      E.cartas(gH.humano ? `<div class="carta act"><small>${esc(w.t)}</small>${esc(w.p)}</div>` : `<div class="carta act"><small>Vale ${valor}</small>¿?</div>`); E.pistas(pistas.concat(fallos.map(f => '✖ ' + f))); E.contador(`Turno: ${G.eq[turno].nombre} · vale ${valor}`);
      if (gH.humano) E.ideas(turno === h ? disp().slice(0, 5) : []);
      const giver = turno === h ? gH : gR; let pista = null;
      if (giver.humano) {
        E.bloquear(false);
        for (;;) { const rr = await E.siguiente(); const t = IA.trocear(rr.v || '')[0]; if (!t) continue; if (IA.esDerivada(t, w.p)) { me.play('fallo'); toast('⛔ ' + F.ilegal, 2000); continue; } pista = t; break; }
      } else { E.bloquear(true); await Dt(700); pista = IA.norm(disp()[0] || azar(w.c)); di(pista, 1800, giver.fig, giver.nombre); if (cfg.voz) me.say(pista, giver.voz, { pregunta: true }); await Dt(900); }
      usadas.add(pista); pistas.push(pista); E.pistas(pistas.concat(fallos.map(f => '✖ ' + f)));
      // adivina el equipo del que dio la pista
      const eqT = G.eq[turno]; let acierto = false;
      if (eqT.humano && !giver.humano) {
        E.bloquear(false); const rr = await Promise.race([E.siguiente(), Dt(9000)]);
        if (rr && rr.tipo === 'texto') { if (IA.esCorrecta(rr.v, w.p)) acierto = true; else { fallos.push(rr.v); me.play('fallo'); } }
      } else {
        const q = eqT.miembros.find(m => m !== giver && !m.humano) || eqT.miembros[1]; await Dt(400);
        const g = IA.adivinar(w, pistas, { habil: q.habil, fallos });
        if (g) { await hablaC(q, g); if (IA.esCorrecta(g, w.p)) acierto = true; else { fallos.push(g); me.play('fallo'); } } else await dice(q, 'nose');
      }
      if (acierto) { ganador = turno; break; }
      valor = Math.max(5, valor - 5); turno = 1 - turno; me.play('pop'); toast('↩️ ' + F.unoRebote, 1200);
    }
    UI.cerrarPanel(); G.turno = -1;
    if (ganador >= 0) { await presDice(`¡${w.p}! ${valor} puntos para el ${G.eq[ganador].nombre.toLowerCase()}.`); await sumar(G, ganador, valor, 'Uno contra uno'); }
    else await presDice(`Nadie la ha sacado. Era ${w.p}.`);
  }
}

// ---------- LA PIRÁMIDE DE PISTAS ----------
export async function piramide(G, { palabras = 4 } = {}) {
  me.music('tension'); G.P.banda('La pirámide de pistas'); await banner('La pirámide de pistas', 'Tema arriba · pistas de una en una · ¡pulsador!'); await habla(F.piramide);
  const h = G.h, r = 1 - h, rivC = G.eq[r].miembros[0]; const ws = IA.sacar(G, palabras, IA.esPool);
  for (let i = 0; i < ws.length; i++) {
    const w = ws[i]; const pis = pick5(w); const dadas = []; let ganador = -1; G.cam('pantalla');
    G.P.pantalla('piramide', { tema: w.t, pistas: [] }); await presDice(`Palabra ${i + 1}. El tema es: ${w.t}.`);
    const PU = UI.pulsador({ titulo: `Pirámide · tema: ${w.t}`, auto: () => dadas.length >= 2 && Math.random() < 0.6 });
    for (let n = 0; n < 5 && ganador < 0; n++) {
      dadas.push(pis[n]); PU.pistas(dadas); PU.contador(`Vale ${[25, 20, 15, 10, 5][n]} puntos`); hud.ronda(`Pirámide · palabra ${i + 1}/${ws.length} · tema ${w.t}`); G.P.pantalla('piramide', { tema: w.t, pistas: dadas.slice() });
      await pistaPres(pis[n]);
      // ventana de pulsador: humano vs rival virtual
      PU.activo(true);
      const tR = Math.random() < IA.confianza(n, rivC.habil * 0.8) ? 1200 + Math.random() * 2500 : null;
      const quien = await Promise.race([PU.esperar().then(() => h), tR ? Dt(tR).then(() => r) : new Promise(() => {}), Dt(4500).then(() => -1)]);
      PU.cancelar(); PU.activo(false);
      if (quien < 0) { if (n < 4) toast(F.piramideNadie, 1000); continue; }
      me.play('pulsador'); const orden = [quien, 1 - quien];
      for (const k of orden) {
        const ok = await responder(G, k, w, dadas, k === quien ? 7000 : 6000);
        if (ok) { ganador = k; break; }
        if (k === quien) toast('↩️ ¡Rebote al ' + G.eq[1 - quien].nombre.toLowerCase() + '!', 1400);
      }
      if (ganador >= 0) { await presDice(`¡Correcto! ${w.p}. ${[25, 20, 15, 10, 5][n]} puntos.`); await sumar(G, ganador, [25, 20, 15, 10, 5][n], 'Pirámide'); }
    }
    PU.quitar(); UI.cerrarPanel();
    if (ganador < 0) await presDice(`La palabra era ${w.p}.`);
  }
}
function pick5(w) { const c = w.c; const idx = [0, 3, 6, 8, c.length - 1]; return [...new Set(idx.map(i => c[Math.min(i, c.length - 1)]))].concat(c).filter((x, i, a) => a.indexOf(x) === i).slice(0, 5); }
async function responder(G, k, w, dadas, ms) {
  const e = G.eq[k];
  if (e.humano) {
    const E = UI.entrada({ modo: 'adivinar', titulo: '¡Has pulsado! Responde', placeholder: 'Tu respuesta', pasar: false, autoMs: 1000, auto: () => Math.random() < 0.75 ? w.p : 'ni idea' });
    E.pistas(dadas); await habla(F.pulsa, 1200);
    const r = await Promise.race([E.siguiente(), Dt(ms)]); UI.cerrarPanel();
    if (r && r.tipo === 'texto' && IA.esCorrecta(r.v, w.p)) { me.play('acierto'); return true; }
    me.play('fallo'); if (r && r.v) toast('✖ ' + r.v, 1200); return false;
  }
  const c = e.miembros[0]; await dice(c, 'pulsa');
  const g = IA.adivinar(w, dadas.map(IA.norm), { habil: c.habil, tema: w.t }) || azar(IA.PALABRAS.filter(x => x.t === w.t)).p;
  await hablaC(c, g); if (IA.esCorrecta(g, w.p)) { me.play('acierto'); return true; } me.play('fallo'); return false;
}

// ---------- EL INTRUSO (videollamada) ----------
export async function intruso(G, I) {
  me.music('tension'); G.P.banda('El intruso'); await banner('El intruso', 'Videollamada desde casa · 5.000 € del bote'); await habla(F.intruso);
  G.P.pantalla('video', { emoji: I.emoji, nombre: I.nombre }); G.cam('pantalla'); await hablaC({ ...I, fig: null }, '¡Hola a todos!');
  await habla(F.intrusoElige);
  const rivalH = Math.random() < 0.7; const contra = rivalH ? G.yo : G.eq[1 - G.h].miembros[0];
  await presDice(`El intruso elige a ${contra.nombre}.`);
  const jug = [{ ...contra, aci: 0, pis: 0 }, { ...I, fig: null, aci: 0, pis: 0 }]; let total = 0; const ws = IA.sacar(G, 4, IA.esPool);
  for (let i = 0; i < ws.length && total < 25; i++) {
    const k = i % 2, j = jug[k], w = ws[i]; const pis = IA.pistasPresentador(w, 6); const dadas = [];
    hud.ronda(`El intruso · pistas ${total}/25 · ${jug[0].nombre} ${jug[0].aci} – ${jug[1].aci} intruso`); toast('🎯 Turno de ' + j.nombre, 1300);
    const E = j.humano ? UI.entrada({ modo: 'adivinar', titulo: `El intruso · tema: ${w.t}`, placeholder: 'Tu respuesta', autoMs: 1400, auto: () => dadas.length >= 2 && Math.random() < 0.6 ? w.p : undefined }) : null;
    let ok = false;
    for (let n = 0; n < pis.length && total < 25 && !ok; n++) {
      dadas.push(pis[n]); total++; j.pis++; if (E) { E.pistas(dadas); E.contador(`Pistas usadas ${total}/25`); }
      await pistaPres(pis[n]);
      if (j.humano) { const r = await Promise.race([E.siguiente(), Dt(4000)]); if (r && r.tipo === 'texto') { if (IA.esCorrecta(r.v, w.p)) ok = true; else { me.play('fallo'); toast('✖ ' + r.v, 1000); } } else if (r && r.tipo === 'pasar') break; }
      else { await Dt(800); if (Math.random() < IA.confianza(n, j.habil * 0.8)) { const g = IA.adivinar(w, dadas.map(IA.norm), { habil: j.habil }); if (g) { await hablaC(j, g); ok = IA.esCorrecta(g, w.p); if (!ok) me.play('fallo'); } } }
    }
    if (E) UI.cerrarPanel();
    if (ok) { j.aci++; me.play('acierto'); await presDice(`¡Bien! ${w.p}.`); } else await presDice(`Era ${w.p}.`);
  }
  const ganaI = jug[1].aci > jug[0].aci || (jug[1].aci === jug[0].aci && jug[1].pis < jug[0].pis);
  if (ganaI) { G.bote = Math.max(0, G.bote - 5000); me.play('ooh'); await habla(F.intrusoGana); } else { G.bote += 5000; me.play('aplausos'); await habla(F.intrusoPierde); }
  UI.marcador(G); G.P.pantalla('bote', { texto: euros(G.bote) }); G.P.banda(euros(G.bote)); await Dt(1500);
}

// ---------- CONTRARRELOJ / TODO PUEDE CAMBIAR ----------
export async function contrarreloj(G) {
  me.music('tension'); G.P.banda('Contrarreloj'); await banner('Contrarreloj', 'Todo puede cambiar · 5 palabras, 25 pistas y 45 s por turno'); await habla(F.contrarreloj);
  const extra = [0, 0], logros = [0, 0];
  for (let t = 0; t < 3; t++) {
    for (const k of [G.h, 1 - G.h]) {
      const E = G.eq[k], giver = E.miembros[t]; G.cam(k === 0 ? 'sofaA' : 'sofaB');
      await presDice(`${E.nombre}: da pistas ${giver.nombre}.` + (extra[k] ? ` Con ${extra[k]} segundos extra.` : ''));
      const res = await turnoDar(G, { eq: E, giver, palabras: IA.sacar(G, 5), maxPistas: 25, seg: 45 + extra[k], titulo: `Contrarreloj · ${E.nombre} · turno ${t + 1}/3`, rapido: !E.humano });
      if (res.todas) { logros[k]++; extra[k] = res.resto; await sumar(G, k, 25, 'Contrarreloj'); } else { extra[k] = 0; me.play('ooh'); }
    }
  }
  for (const k of [0, 1]) if (logros[k] === 3) { await habla(F.bonus); await sumar(G, k, 100, 'Bonus'); }
}

// ---------- LAS DIEZ DE ÚLTIMAS ----------
export async function diezDeUltimas(G, k) {
  me.music('diabolico'); G.P.banda(euros(G.bote)); G.P.pantalla('bote', { texto: euros(G.bote) });
  await banner('Las diez de últimas', `10 palabras · 25 pistas · 60 segundos · ${euros(G.bote)}`); await habla(k === G.h ? F.diez : F.diezRival);
  const E = G.eq[k]; G.cam(k === 0 ? 'sofaA' : 'sofaB');
  const res = await turnoDar(G, { eq: E, giver: E.miembros[0], palabras: IA.sacar(G, 10), maxPistas: 25, seg: 60, titulo: `Las diez de últimas · ${euros(G.bote)}`, rapido: !E.humano });
  return res;
}
