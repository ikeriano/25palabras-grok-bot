// Genera icon-192.png e icon-512.png (disco rosa con «25», original)
import puppeteer from 'puppeteer-core'; import fs from 'fs';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox'] });
const p = await b.newPage();
for (const S of [192, 512]) {
  const data = await p.evaluate(S => {
    const c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
    const bg = g.createLinearGradient(0, 0, 0, S); bg.addColorStop(0, '#06104a'); bg.addColorStop(1, '#1a4ad0'); g.fillStyle = bg; g.fillRect(0, 0, S, S);
    for (let x = 0; x < S; x += S / 14) { g.fillStyle = 'rgba(95,216,255,.25)'; g.fillRect(x, 0, S / 60, S); }
    const r = S * 0.4, cx = S / 2, cy = S / 2; const gr = g.createRadialGradient(cx - r * 0.3, cy - r * 0.35, r * 0.1, cx, cy, r); gr.addColorStop(0, '#ff8ad8'); gr.addColorStop(0.55, '#ff3fb4'); gr.addColorStop(1, '#d0168a');
    g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill(); g.lineWidth = r * 0.09; g.strokeStyle = '#2a7bff'; g.stroke();
    g.font = `900 ${r * 1.1}px Arial Black, Arial`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round'; g.lineWidth = r * 0.16; g.strokeStyle = '#123cc8'; g.strokeText('25', cx, cy - r * 0.1); g.fillStyle = '#fff'; g.fillText('25', cx, cy - r * 0.1);
    g.font = `italic 900 ${r * 0.34}px Arial Black, Arial`; g.lineWidth = r * 0.08; g.strokeText('palabras', cx, cy + r * 0.55); g.fillText('palabras', cx, cy + r * 0.55);
    return c.toDataURL('image/png').split(',')[1];
  }, S);
  fs.writeFileSync(`icon-${S}.png`, Buffer.from(data, 'base64'));
}
await b.close(); console.log('iconos ok');
