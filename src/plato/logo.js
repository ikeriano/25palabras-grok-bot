// Logo ORIGINAL dibujado por código, inspirado en el disco rosa de «25 palabras»: círculo rosa con aro
// azul, un «25» blanco grande con contorno azul y «palabras» debajo. (No es el logo oficial; el usuario
// puede subir el suyo desde Opciones.)
export function drawLogo(g, cx, cy, ancho, t = 0, o = {}) {
  const r = ancho * 0.36; g.save();
  // halo
  g.shadowColor = '#ff4fd8'; g.shadowBlur = r * 0.35;
  const gr = g.createRadialGradient(cx - r * 0.3, cy - r * 0.35, r * 0.1, cx, cy, r);
  gr.addColorStop(0, o.c1 || '#ff8ad8'); gr.addColorStop(0.55, o.c2 || '#ff3fb4'); gr.addColorStop(1, o.c3 || '#d0168a');
  g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fill(); g.shadowBlur = 0;
  // aros
  g.lineWidth = r * 0.09; g.strokeStyle = '#2a7bff'; g.beginPath(); g.arc(cx, cy, r * 0.97, 0, Math.PI * 2); g.stroke();
  g.lineWidth = r * 0.035; g.strokeStyle = '#bff0ff'; g.beginPath(); g.arc(cx, cy, r * 1.04, 0, Math.PI * 2); g.stroke();
  // brillo giratorio
  g.save(); g.globalAlpha = 0.25; g.strokeStyle = '#fff'; g.lineWidth = r * 0.05; g.beginPath(); g.arc(cx, cy, r * 0.8, t * 0.8, t * 0.8 + 1.1); g.stroke(); g.restore();
  // «25»
  const txt = o.texto || '25';
  g.font = `900 ${r * 1.15}px "Arial Black", Arial`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineJoin = 'round'; g.lineWidth = r * 0.16; g.strokeStyle = '#123cc8'; g.strokeText(txt, cx, cy - r * 0.12);
  g.lineWidth = r * 0.05; g.strokeStyle = '#9fe8ff'; g.strokeText(txt, cx, cy - r * 0.12);
  g.fillStyle = '#ffffff'; g.fillText(txt, cx, cy - r * 0.12);
  // «palabras»
  const sub = o.sub || 'palabras';
  g.font = `italic 900 ${r * 0.36}px "Arial Black", Arial`; g.lineWidth = r * 0.09; g.strokeStyle = '#123cc8'; g.strokeText(sub, cx, cy + r * 0.56);
  g.fillStyle = '#ffffff'; g.fillText(sub, cx, cy + r * 0.56);
  g.restore();
}
