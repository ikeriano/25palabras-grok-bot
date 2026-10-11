// Capturas bonitas de cada prueba: node tools/fotos.mjs
import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const w = ms => new Promise(r => setTimeout(r, ms)); let err = 0;
async function foto(modo, nombre, cond, extra = '', espera = 700) {
  const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
  p.on('pageerror', e => { console.log('PAGEERROR', e.message); err++; });
  await p.goto(`http://localhost:8768/index.html?capture&auto&${extra || "vel=2"}`); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
  await p.evaluate(m => { window.__at.cfg.voz = false; window.__at.iniciar(m); }, modo);
  const t0 = Date.now(); let ok = false;
  while (Date.now() - t0 < 240000) { await w(400); if (await p.evaluate(cond)) { ok = true; break; } }
  await w(espera); await p.screenshot({ path: `capturas/${nombre}.png` }); console.log(nombre, ok ? 'ok' : 'timeout'); await p.close();
}
await foto('entreno:apuesta', 'foto_apuesta', () => !!document.querySelector('.apuesta'), 'vel=0.4', 0);
await foto('entreno:intruso', 'foto_intruso', () => /intruso elige|Turno de/.test(document.querySelector('#toast').textContent + document.querySelector('#bubble').textContent));
if (process.argv[2] === 'dos') { await b.close(); process.exit(0); }
await foto('entreno:contrarreloj', 'foto_dar_pistas', () => document.querySelectorAll('#juego .pz').length >= 2);
await foto('entreno:piramide', 'foto_piramide', () => document.querySelectorAll('#juego .pz').length >= 3);
await foto('entreno:intruso', 'foto_intruso', () => /intruso elige|Turno de/.test(document.querySelector('#toast').textContent + document.querySelector('#bubble').textContent));
await foto('entreno:uno', 'foto_uno_contra_uno', () => document.querySelectorAll('#juego .pz').length >= 2);
await foto('entreno:adivina', 'foto_adivina', () => document.querySelectorAll('#juego .pz').length >= 3);
await foto('entreno:diez', 'foto_diez', () => document.querySelectorAll('#juego .carta.ok').length >= 3);
console.log('errores', err); await b.close();
