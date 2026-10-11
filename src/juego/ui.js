// Piezas de interfaz propias de 25 palabras: marcador de equipos, panel para dar pistas / adivinar y pulsador.
import { $, esc, Zi, VEL, euros } from './core.js';
import { me } from '../lib/audio.js';

// ---------- marcador (equipo izquierdo · reloj · equipo derecho) ----------
export function marcador(G) {
  if (!G) return;
  const eq = (e, k) => `<div class="eq ${e.humano ? 'tu' : ''} ${G.turno === k ? 'act' : ''}" style="--c:${e.color}"><div class="en">${esc(e.nombre)}${e.humano ? ' · TÚ' : ''}</div><div class="ep">${e.puntos}</div><div class="em">${e.miembros.map(m => esc(m.emoji)).join(' ')}</div></div>`;
  $('#hudA').innerHTML = eq(G.eq[0], 0); $('#hudB').innerHTML = eq(G.eq[1], 1);
  $('#hudBote').textContent = G.bote ? 'BOTE ' + euros(G.bote) : '';
  $('#hud').classList.remove('hidden');
}

// ---------- panel de juego ----------
const J = () => $('#juego');
export function cerrarPanel() { const j = J(); j.classList.add('hidden'); j.innerHTML = ''; j.className = 'hidden'; }
/**
 * Panel para escribir pistas (modo 'dar') o respuestas (modo 'adivinar').
 * auto(): valor que «escribe» el modo automático de pruebas (null = Pasar).
 */
export function entrada({ modo = 'dar', titulo = '', placeholder = '', pasar = true, auto = () => null, autoMs = 800 }) {
  const j = J(); j.className = 'jg-' + modo; j.innerHTML = `
    <div class="jg-cab"><b>${esc(titulo)}</b><span class="jg-cont"></span></div>
    <div class="jg-cartas"></div>
    <div class="jg-pistas"></div>
    <div class="jg-fila"><input class="jg-in" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="40" placeholder="${esc(placeholder)}"><button class="jg-ok">${modo === 'dar' ? 'Dar pista ▶' : 'Responder ▶'}</button>${pasar ? '<button class="jg-pasar">Pasar ⏭</button>' : ''}</div>
    <div class="jg-ideas"></div>`;
  const inp = j.querySelector('.jg-in'); let res = null, bloq = false, autoT = null;
  const enviar = v => { if (!res || bloq) return; const r = res; res = null; clearTimeout(autoT); r(v); };
  const ok = () => { const v = inp.value.trim(); if (!v) return; inp.value = ''; me.play('tecla'); enviar({ tipo: 'texto', v }); };
  j.querySelector('.jg-ok').onclick = e => { e.stopPropagation(); ok(); };
  const bp = j.querySelector('.jg-pasar'); if (bp) bp.onclick = e => { e.stopPropagation(); me.play('tecla'); enviar({ tipo: 'pasar' }); };
  inp.onkeydown = e => { e.stopPropagation(); if (e.key === 'Enter') ok(); if (e.key === 'Escape') window.__back && window.__back(); };
  inp.onpointerdown = e => e.stopPropagation();
  j.onpointerdown = e => e.stopPropagation();
  j.classList.remove('hidden');
  if (!matchMedia('(pointer: coarse)').matches) setTimeout(() => inp.focus(), 50);
  return {
    siguiente() {
      return Zi(new Promise(r => {
        res = r; clearTimeout(autoT);
        if (window.__AUTO) autoT = setTimeout(() => { const v = auto(); if (v === undefined) return; enviar(v === null ? { tipo: 'pasar' } : { tipo: 'texto', v }); }, autoMs / VEL());
      }));
    },
    cartas(html) { j.querySelector('.jg-cartas').innerHTML = html; },
    pistas(lista, cls = '') { j.querySelector('.jg-pistas').innerHTML = lista.map(p => `<span class="pz ${cls}">${esc(p)}</span>`).join(''); },
    contador(t) { j.querySelector('.jg-cont').textContent = t; },
    ideas(lista) { const d = j.querySelector('.jg-ideas'); d.innerHTML = lista.length ? '<small>Ideas:</small>' : ''; lista.forEach(p => { const b = document.createElement('button'); b.textContent = p; b.onclick = e => { e.stopPropagation(); me.play('tecla'); enviar({ tipo: 'texto', v: p }); }; d.appendChild(b); }); },
    bloquear(b) { bloq = b; j.classList.toggle('bloq', b); },
    foco() { inp.focus(); },
    cancelar() { res = null; clearTimeout(autoT); },
  };
}
/** Tarjeta(s) con las palabras para el que da pistas */
export const cartasHTML = (ws, act) => ws.map((w, i) => `<div class="carta ${w.est || ''} ${i === act ? 'act' : ''}"><small>${esc(w.t)}</small>${esc(w.p)}</div>`).join('');

// ---------- pulsador (pirámide de pistas) ----------
export function pulsador({ titulo = '', auto = () => false }) {
  const j = J(); j.className = 'jg-puls'; j.innerHTML = `<div class="jg-cab"><b>${esc(titulo)}</b><span class="jg-cont"></span></div><div class="jg-pistas"></div><button class="puls">🔴 PULSAR<small>o barra espaciadora</small></button>`;
  let res = null, autoT = null; const b = j.querySelector('.puls');
  const fire = () => { if (res) { const r = res; res = null; clearTimeout(autoT); me.play('pulsador'); r('PULSA'); } };
  b.onclick = e => { e.stopPropagation(); fire(); };
  const key = e => { if (e.code === 'Space' && !J().classList.contains('hidden') && J().classList.contains('jg-puls')) { e.preventDefault(); fire(); } };
  addEventListener('keydown', key);
  j.onpointerdown = e => e.stopPropagation(); j.classList.remove('hidden');
  return {
    esperar() { return Zi(new Promise(r => { res = r; if (window.__AUTO && auto()) autoT = setTimeout(fire, 500 / VEL()); })); },
    cancelar() { res = null; clearTimeout(autoT); },
    pistas(l) { j.querySelector('.jg-pistas').innerHTML = l.map((p, i) => `<span class="pz">${esc(p)}<em>${[25, 20, 15, 10, 5][i]}</em></span>`).join(''); },
    contador(t) { j.querySelector('.jg-cont').textContent = t; },
    activo(v) { b.disabled = !v; },
    quitar() { removeEventListener('keydown', key); },
  };
}
