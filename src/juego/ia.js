// Palabras del juego (src/data/palabras.json: 340+ palabras con sus pistas, de la más difícil a la más obvia),
// validación de pistas (ni la palabra ni derivadas) e IA sencilla de asociaciones de los famosos virtuales.
import DATA from '../data/palabras.json';
import { baraja, azar } from './core.js';

export const PALABRAS = DATA;
export const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u0302\u0304-\u036f]/g, '').normalize('NFC').replace(/[^a-z0-9ñ ]/g, ' ').replace(/\s+/g, ' ').trim();
const stem = x => x.length <= 3 ? x : x.replace(/[aeiou]+$/, '');
function deriv1(a, b) {
  if (a === b) return true;
  for (const [x, y] of [[a, b], [b, a]]) { const s = stem(x); if (s.length >= 4 && y.startsWith(s)) return true; if (s.length === 3 && y.startsWith(s) && y.length <= s.length + 4) return true; }
  let k = 0; while (k < Math.min(a.length, b.length) && a[k] === b[k]) k++; return k >= 5;
}
/** ¿La pista es la palabra o una derivada? */
export function esDerivada(pista, palabra) { const tw = norm(palabra).split(' ').filter(w => w.length >= 3); return norm(pista).split(' ').some(c => c && tw.some(w => deriv1(c, w))); }
/** Parte lo escrito en palabras sueltas (cada palabra cuenta como una pista) */
export const trocear = txt => norm(txt).split(' ').filter(Boolean);
function lev(a, b) { const m = a.length, n = b.length; if (Math.abs(m - n) > 2) return 9; const d = Array.from({ length: m + 1 }, (_, i) => [i]); for (let j = 1; j <= n; j++) d[0][j] = j; for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[m][n]; }
/** ¿La respuesta es correcta? (sin tildes; admite una errata en palabras largas, plural/singular y sin artículo) */
export function esCorrecta(resp, palabra) {
  let r = norm(resp).replace(/^(el|la|los|las|un|una|unos|unas) /, ''), p = norm(palabra); if (!r) return false;
  if (r === p || r.replace(/ /g, '') === p.replace(/ /g, '')) return true;
  if (r.replace(/e?s$/, '') === p.replace(/e?s$/, '')) return true;
  if (p.length >= 6 && lev(r, p) <= 1) return true;
  const ult = p.split(' ').pop(); return p.includes(' ') && ult.length >= 5 && r === ult && !/^(de|del)$/.test(ult);
}
// ---------- índice de asociaciones ----------
const IDX = DATA.map(w => { const s = new Set(); w.c.forEach(c => norm(c).split(' ').forEach(x => x.length > 1 && s.add(x))); s.add(norm(w.t)); return { w, s, n: norm(w.p) }; });
function puntua(e, pistas) { let sc = 0; for (const c of pistas) { if (e.s.has(c)) { sc += 1; continue; } if (c.length >= 5) for (const x of e.s) if (x.length >= 5 && (x.startsWith(c.slice(0, 5)) || c.startsWith(x.slice(0, 5)))) { sc += 0.6; break; } } return sc; }
/**
 * Un famoso virtual intenta adivinar. pistas = palabras normalizadas dadas para ESTA palabra.
 * habil 0..1. Devuelve la palabra que dice (texto) o null si no se atreve.
 */
export function adivinar(objetivo, pistas, { habil = 0.75, fallos = [], tema = null } = {}) {
  const n = pistas.length; if (!n) return null;
  const ya = new Set(fallos.map(norm));
  const cands = IDX.filter(e => !ya.has(e.n)).map(e => ({ e, sc: puntua(e, pistas) + (tema && e.w.t === tema ? 0.3 : 0) + Math.random() * 0.45 })).sort((a, b) => b.sc - a.sc);
  const obj = IDX.find(e => e.w.p === objetivo.p);
  // «intuición»: aunque las pistas escritas no estén en su diccionario, cuantas más pistas, más fácil que caiga
  const intu = Math.min(0.85, habil * (0.05 + 0.11 * n));
  if (obj && !ya.has(obj.n) && Math.random() < intu) return objetivo.p;
  const top = cands[0];
  if (top && top.sc >= 1 + (Math.random() < habil ? 0 : 0.8)) return top.e.w.p;
  if (Math.random() < 0.25 + 0.05 * n) { const mismo = cands.filter(c => c.e.w.t === (tema || objetivo.t)).slice(0, 6); if (mismo.length) return azar(mismo).e.w.p; }
  return null;
}
/** Probabilidad de que un rival virtual pulse el pulsador con k pistas (pirámide) */
export const confianza = (k, habil) => Math.min(0.92, habil * (0.12 + 0.2 * k));
/** Pistas que daría un concursante virtual (las más claras primero) */
export const pistasClaras = w => w.c.slice().reverse();
/** Pistas del presentador (de la más difícil a la más obvia) */
export const pistasPresentador = (w, n = 12) => w.c.slice(0, n);
/** Saca palabras sin repetir dentro de la partida */
export function sacar(G, n, filtro = null) {
  let l = baraja(PALABRAS.filter(w => !G.usadas.has(w.p) && (!filtro || filtro(w))));
  if (l.length < n) { G.usadas.clear(); l = baraja(PALABRAS.filter(w => !filtro || filtro(w))); }
  const r = l.slice(0, n); r.forEach(w => G.usadas.add(w.p)); return r;
}
/** Palabras que también lee el presentador con voz pregenerada (repesca, pirámide, intruso) */
export const POOL_PRES = PALABRAS.filter((w, i) => i % 5 === 0 && !w.p.includes(' '));
export const esPool = w => POOL_PRES.includes(w);
