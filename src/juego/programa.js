// Flujos de juego con la organización del APK: Programa completo, Clásico (estreno 2022) y Entrenamiento.
import { me } from '../lib/audio.js';
import { esc, euros, baraja, azar, Dt, habla, hablaC, hashtag, rotulo, acciones, rodarCreditos, setMoneda, toast, hud, boteGrande, banner } from './core.js';
import { cfg } from '../cfg.js';
import { F, CHISTES, FAMOSOS, CONCURSANTES, INTRUSO } from './frases.js';
import * as PR from './pruebas.js';
import * as IA from './ia.js';
import * as UI from './ui.js';
import { THEMES } from '../temas.js';
import { COLORES_EQ } from '../plato/plato.js';
import { CREDITOS_VOCES } from '../lib/voces.js';

export const ETAPAS = {
  estreno: { id: 'estreno', nombre: 'Estreno (dic-2022 · ene-2023)', corto: 'Estreno · 2022', repesca: false, intruso: true, archivosMusica: ['cabecera_estreno', 'cabecera'], archivosLogo: ['logo_estreno', 'logo'] },
  t2023: { id: 't2023', nombre: 'Con repesca (feb · sep 2023)', corto: 'Telecinco · 2023', repesca: true, intruso: false, archivosMusica: ['cabecera_2023', 'cabecera'], archivosLogo: ['logo_2023', 'logo'] },
};
const BOTE0 = 250000, SUBE = 5000;
export const leerBote = () => +localStorage.getItem('p25_bote') || BOTE0;
const guardarBote = n => localStorage.setItem('p25_bote', String(n));

export function crearG({ hEq = 0 } = {}, api) {
  setMoneda('€');
  const fam = baraja(FAMOSOS), riv = baraja(CONCURSANTES);
  const yo = { nombre: cfg.nombre || 'Tú', prof: cfg.profesion || 'Concursante', emoji: '😎', voz: 'sharvard', humano: true, habil: 0.8 };
  const eq = [{ nombre: 'Equipo azul', color: COLORES_EQ.azul }, { nombre: 'Equipo rosa', color: COLORES_EQ.rosa }].map(e => ({ ...e, puntos: 0, miembros: [], humano: false }));
  eq[hEq].miembros = [yo, fam[0], fam[1]]; eq[hEq].humano = true; eq[1 - hEq].miembros = [riv[0], fam[2], fam[3]];
  eq.forEach((e, k) => e.miembros.forEach((m, i) => { m.fig = k * 3 + i; }));
  const G = { eq, h: hEq, yo, P: api.P(), cam: api.cam, usadas: new Set(), bote: leerBote(), turno: -1, aspirante: riv[1] };
  G.P.reset(); UI.marcador(G); return G;
}
async function chiste() { if (!cfg.chistes) return; await habla(azar(CHISTES), 4000); me.play('badumtss'); me.play('risas'); await Dt(900); }
export const AYUDA = `<p><b>Objetivo:</b> hacer adivinar palabras con el <b>menor número de pistas</b>. Cada pista es <b>una sola palabra</b>: no vale la palabra secreta ni sus <b>derivadas</b> (si la palabra es «playa», no vale «playero»), ni mímica. Juegas en un equipo con <b>dos famosos virtuales</b>; el equipo con más puntos juega la final por el <b>bote</b> (empieza en 250.000 € y sube 5.000 € cada programa).</p>
<p><b>La repesca</b> (desde febrero de 2023): el perdedor del día anterior contra un aspirante. El presentador da pistas cada vez más obvias, hasta 15; cuantas menos necesites, más puntos. El que más puntos haga se queda en el <b>equipo rosa</b>.</p>
<p><b>La apuesta</b>: apuesta a la baja desde 25 pistas. Quien baje más (o a quien le digan «¡Hazlo tú!») juega: <b>5 palabras en 45 s</b> sin pasar de las pistas apostadas. <b>75 puntos</b>.</p>
<p><b>Uno contra uno</b>: por parejas, la misma palabra, <b>una pista por turno</b>. Cada rebote resta 5 puntos. 25 puntos por ronda; en la 1.ª das tú las pistas y en la 2.ª y 3.ª adivinas lo que dicen tus famosos.</p>
<p><b>La pirámide de pistas</b>: el tema sale arriba y el presentador da pistas de una en una. Pulsa (botón rojo o barra espaciadora) y responde: <b>25, 20, 15, 10 o 5 puntos</b>. Si fallas, rebote al rival.</p>
<p><b>El intruso</b> (estreno, o activándolo en Opciones): un concursante por videollamada elige rival. Turnos alternos con 25 pistas del presentador en total; si gana el intruso se lleva <b>5.000 €</b> del bote; si gana el plató, se suman al bote.</p>
<p><b>Contrarreloj · Todo puede cambiar</b>: cada miembro del equipo da pistas para <b>5 palabras</b> (25 pistas, 45 s): <b>25 puntos</b>; el tiempo que sobre pasa al siguiente compañero y si los tres lo consiguen hay <b>100 de bonus</b>.</p>
<p><b>Las diez de últimas</b>: el concursante ganador tiene <b>60 s y 25 pistas</b> para que sus famosos acierten <b>10 palabras</b>. ¡Si lo logra, se lleva el bote!</p>
<p><b>Cómo dar pistas:</b> escribe en la casilla y pulsa Intro (o toca una de las «Ideas»). Si escribes varias palabras, cada una cuenta como una pista. «Pasar» deja la palabra para el final. <b>Cómo adivinar:</b> escribe la palabra; las tildes dan igual.</p>
<p><b>Controles:</b> ☰ menú · 👁 cámara · 💡 luces · «Saltar ⏭» pasa la cabecera, la despedida y los monólogos. En el paseo: joystick o WASD y arrastra para mirar.</p>`;

export function creditos(G) {
  const Pn = cfg.presentador || 'Rafa Verbo';
  const cs = G ? G.eq.flatMap(e => e.miembros) : [{ nombre: cfg.nombre || 'Tú', prof: cfg.profesion || 'Concursante' }, ...CONCURSANTES.slice(0, 1)];
  return [['Presentado por', [`${Pn} (presentador virtual)`]],
    ['Concursantes', (G ? G.eq.map(e => e.miembros[0]) : cs).map((c, i) => `${i + 1}. ${c.nombre} · ${c.prof}`)],
    ['Famosos (virtuales e inventados)', (G ? G.eq.flatMap(e => e.miembros.slice(1)) : FAMOSOS).map(f => `${f.nombre} · ${f.prof}`)],
    ['Creación', ['Juego creado por: Iker']], ['Basado en', ['El concurso «25 palabras» de Telecinco (adaptación no oficial)', 'Formato «25 Words or Less» (Fox)']],
    ['Música y sonidos', ['Sintetizados por el propio juego', 'o los que subas desde Opciones']], CREDITOS_VOCES,
    ['Gráficos 3D', ['Plató original inspirado en las fotos del programa']], ['Público de las gradas', ['Sonidos sintetizados']],
    ['Licencias', ['Three.js · MIT', 'Piper TTS · MIT', 'esbuild · MIT', 'Fuente Helvetiker Bold · MAGENTA Ltd. (licencia libre, ver src/fonts/LICENSE)', 'Palabras y pistas: escritas para este juego']]];
}
export const PRUEBAS_ENTRENO = {
  apuesta: ['La apuesta', '5 palabras · 45 s · apuesta a la baja'], uno: ['Uno contra uno', 'Una pista por turno, rebotes'], piramide: ['La pirámide de pistas', 'Tema, pistas y pulsador'],
  contrarreloj: ['Contrarreloj', 'Todo puede cambiar: 3 turnos por equipo'], diez: ['Las diez de últimas', '10 palabras · 60 s · 25 pistas'], repesca: ['La repesca', 'Pistas del presentador, hasta 15'],
  intruso: ['El intruso', 'Videollamada por 5.000 €'], libre: ['Dar pistas libre', 'Sin reloj: tus famosos adivinan'], adivina: ['Adivina tú', 'Un famoso te da pistas'],
};

async function presentar(G) {
  if (!cfg.presentaciones) return;
  await habla(F.presentacion);
  for (const [k, e] of G.eq.entries()) {
    G.cam(k === 0 ? 'sofaA' : 'sofaB'); G.P.luzEquipo(k, true);
    await rotulo(e.nombre + (e.humano ? ' · ¡el tuyo!' : ''), e.miembros.map(m => `${m.emoji} ${m.nombre}`).join(' · '), 2600);
    await hablaC(e.miembros[1], azar(['¡Hola a todos!', '¡Qué ilusión estar aquí!', '¡Vamos a por el bote!'])); G.P.luzEquipo(k, false);
  }
}
async function despedida(G, api) {
  G.cam('general'); G.P.pantalla('logo'); G.P.banda('25 palabras'); me.music('menu'); await habla(F.despedida);
  me.play('aplausos'); await api.saltable(rodarCreditos(creditos(G), 14000));
}
export async function jugarPrograma(modo, api) {
  const etapa = modo === 'clasico' ? 'estreno' : (ETAPAS[cfg.etapa] ? cfg.etapa : 't2023'); const E = ETAPAS[etapa];
  const tema = api.tema(); const T = THEMES[tema] || THEMES.normal; api.setEtapa(etapa);
  const prev = localStorage.getItem('p25_estado');
  const hacerRepesca = E.repesca && prev !== 'campeon';
  const G = crearG({ hEq: hacerRepesca ? 1 : 0 }, api); hud.show(false);
  await api.cabecera();
  hashtag(T.hashtag || '#25palabras'); UI.marcador(G); G.P.banda(euros(G.bote)); G.P.pantalla('logo');
  G.cam('presentador'); me.music('trilha'); me.play('aplausos');
  await habla(modo === 'clasico' ? F.estreno : F.bienvenida); if (T.saludo) await habla(T.saludo); for (const x of T.extra || []) await habla(x);
  if (T.festivo) G.P.celebrar();
  await habla(F.bienvenida2); G.cam('banda'); G.P.pantalla('bote', { texto: euros(G.bote) }); await habla(F.bote); await boteGrande(G.bote, 'Bote de hoy', 2200);
  if (cfg.monologo) await api.monologo(null, true);
  await presentar(G); await chiste();
  if (E.repesca) {
    if (hacerRepesca) {
      const rival = { ...G.aspirante, fig: null };
      const ok = await PR.repesca(G, rival);
      if (!ok) { localStorage.setItem('p25_estado', 'repesca'); me.play('ooh'); await habla(F.repescaPierdes); await despedida(G, api); return fin(G, api); }
      await habla(F.repescaGanas);
    } else { await habla(F.repescaRival); await rotulo('Repesca', `${G.aspirante.nombre} gana la repesca y se sienta en el sofá rosa`, 2600); }
  }
  await api.paseo(G.yo.fig);
  await PR.apuesta(G); await chiste();
  await PR.unoContraUno(G);
  if (E.intruso || cfg.intruso) await PR.intruso(G, INTRUSO);
  await PR.piramide(G); await chiste();
  await PR.contrarreloj(G);
  const [a, b] = G.eq.map(e => e.puntos); const gana = a === b ? G.h : a > b ? 0 : 1;
  await banner(G.eq[gana].nombre + ' gana', `${G.eq[0].puntos} – ${G.eq[1].puntos}`); G.cam(gana === 0 ? 'sofaA' : 'sofaB'); G.P.luzEquipo(gana, true);
  await habla(gana === G.h ? F.ganaEquipo : F.pierdeEquipo); localStorage.setItem('p25_estado', gana === G.h ? 'campeon' : 'repesca');
  const res = await PR.diezDeUltimas(G, gana);
  if (res.aciertos >= 10) { me.play('ovacion'); G.P.celebrar(); await habla(F.boteGanado); await boteGrande(G.bote, gana === G.h ? '¡Es tuyo!' : '¡Se lo lleva el ' + G.eq[gana].nombre.toLowerCase() + '!', 3200); guardarBote(BOTE0); }
  else { me.play('ooh'); await habla(F.boteNo); guardarBote(G.bote + SUBE); toast(`El bote sube a ${euros(G.bote + SUBE)}`, 3000); }
  await despedida(G, api); return fin(G, api);
}
function fin(G, api) {
  api.orbita(); hud.sinTimer(); hud.ronda('');
  api.marcador(`🏁 ${G.eq[0].nombre} ${G.eq[0].puntos} · ${G.eq[1].nombre} ${G.eq[1].puntos}`);
  acciones([{ label: 'Jugar otra vez', cls: 'gold', fn: () => api.iniciar('programa') }, { label: 'Menú', fn: () => api.menu('play') }]);
  return new Promise(() => {});
}
export async function entrenamiento(k, api, { ilimitado = false } = {}) {
  const G = crearG({ hEq: 0 }, api); G.entreno = true; hashtag('#25palabrasEntrena'); G.cam('general'); me.music('trilha');
  if (ilimitado) toast('♾️ Tiempo ilimitado', 1500);
  const W = (n, f) => IA.sacar(G, n, f);
  if (k === 'apuesta') await PR.apuesta(G);
  else if (k === 'uno') await PR.unoContraUno(G);
  else if (k === 'piramide') await PR.piramide(G, { palabras: 3 });
  else if (k === 'contrarreloj') { const r = await PR.turnoDar(G, { eq: G.eq[0], giver: G.yo, palabras: W(5), maxPistas: 25, seg: 45, ilimitado, titulo: 'Contrarreloj · entrenamiento' }); toast(r.todas ? '✅ ¡25 puntos!' : `${r.aciertos}/5`, 2500); }
  else if (k === 'diez') { const r = await PR.turnoDar(G, { eq: G.eq[0], giver: G.yo, palabras: W(10), maxPistas: 25, seg: 60, ilimitado, titulo: 'Las diez de últimas · entrenamiento' }); toast(`${r.aciertos}/10 con ${r.pistas} pistas`, 3000); }
  else if (k === 'repesca') await PR.repesca(G, { ...G.aspirante, fig: null }, { palabras: 2 });
  else if (k === 'intruso') await PR.intruso(G, INTRUSO);
  else if (k === 'libre') { await habla(F.libre); const r = await PR.turnoDar(G, { eq: G.eq[0], giver: G.yo, palabras: W(5), maxPistas: 99, seg: 0, ilimitado: true, titulo: 'Dar pistas libre' }); toast(`${r.aciertos}/5 con ${r.pistas} pistas`, 3000); }
  else if (k === 'adivina') { await habla(F.adivina); const r = await PR.turnoDar(G, { eq: G.eq[0], giver: G.eq[0].miembros[1], palabras: W(5), maxPistas: 40, seg: 90, ilimitado, titulo: 'Adivina tú' }); toast(`Has acertado ${r.aciertos}/5`, 3000); }
  api.orbita(); hud.sinTimer();
  acciones([{ label: 'Repetir', cls: 'gold', fn: () => api.iniciar('entreno:' + k) }, { label: 'Entrenamiento', fn: () => api.menu('train') }]);
  return new Promise(() => {});
}
export { esc };
