// Ajustes persistentes (mismas filas que las Opciones del APK de referencia «¡Ahora Caigo! 3D»)
const DEF = { music: true, musicVol: 0.8, sfx: true, sfxVol: 0.9, publico: true, publicoVol: 0.8, gradas: true, voz: true, lee: true, leeVel: 'normal', chistes: true, monologo: false,
  cabecera: '3d', etapa: 't2023', quality: 'media', nombre: '', profesion: '', presentador: 'Rafa Verbo', presentaciones: true, platoLuz: 'auto', intruso: false, reflejo: true };
export const VERSION = '1.0';
export const cfg = Object.assign({}, DEF, JSON.parse(localStorage.getItem('p25_cfg') || '{}'));
const subs = new Set();
export function guardarCfg() { localStorage.setItem('p25_cfg', JSON.stringify(cfg)); subs.forEach(f => f(cfg)); }
export const alCambiarCfg = f => subs.add(f);
