// Prueba todos los modos de entrenamiento + Clásico en automático: node tools/entrenos.mjs
import puppeteer from 'puppeteer-core';
const MODOS = ['entreno:apuesta', 'entreno:uno', 'entreno:piramide', 'entreno:contrarreloj', 'entreno:diez', 'entreno:repesca', 'entreno:intruso', 'entreno:libre', 'entreno:adivina', 'clasico'];
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
let total = 0;
for (const m of (process.argv[2] ? process.argv.slice(2) : MODOS)) {
  const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 }); let err = 0;
  p.on('pageerror', e => { console.log('PAGEERROR', m, e.message); err++; }); p.on('console', x => { if (x.type() === 'error' && !/Failed to load resource|404/.test(x.text())) { console.log('console.error', m, x.text()); err++; } });
  await p.goto(`http://localhost:8768/index.html?capture&auto&vel=6`); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
  await p.evaluate(m => { window.__at.cfg.voz = false; window.__at.iniciar(m); }, m);
  const t0 = Date.now(); let shot = false, ok = false;
  while (Date.now() - t0 < 600000) { await new Promise(r => setTimeout(r, 2500)); const st = await p.evaluate(() => ({ acc: document.querySelector('#actions').innerText, jg: !document.querySelector('#juego').classList.contains('hidden') || !document.querySelector('#overlay').classList.contains('hidden') }));
    if (st.jg && !shot && Date.now() - t0 > 6000) { await p.screenshot({ path: `capturas/entreno_${m.replace(':', '_')}.png` }); shot = true; }
    if (/Repetir|Jugar otra vez/.test(st.acc)) { ok = true; break; } }
  if (!shot) await p.screenshot({ path: `capturas/entreno_${m.replace(':', '_')}.png` });
  console.log(m, ok ? 'OK' : 'NO TERMINA', 'errores', err, ((Date.now() - t0) / 1000 | 0) + 's'); total += err + (ok ? 0 : 1); await p.close();
}
console.log('TOTAL fallos', total); await b.close();
