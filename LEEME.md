# 25 palabras · El juego 3D

Juego web 3D (Three.js + esbuild, PWA instalable) inspirado en el concurso «25 palabras» de Telecinco (2022-2023, adaptación de «25 Words or Less»). Proyecto de fans, sin ánimo de lucro.
Misma interfaz que la plantilla de menús del APK «¡Ahora Caigo! 3D» (título «Toca para empezar», menú, Jugar, Opciones, Historia, Cómo se juega, Créditos, Instalar app).

**Juego creado por: Iker**

## Modos
- **Programa completo** (etapa 2023): cabecera, repesca, La apuesta, Uno contra uno, La pirámide de pistas, (El intruso opcional), Contrarreloj / Todo puede cambiar y Las diez de últimas por el bote (250.000 € + 5.000 € por programa).
- **Clásico**: el estreno de diciembre de 2022, sin repesca y con El intruso por videollamada.
- **Entrenamiento** (cada prueba por separado, con reloj o tiempo ilimitado), **Explorar el plató**, **Monólogos del presentador**, **Programa especial** (temas) y **La historia de 25 palabras** (14 capítulos contados por el presentador).

## Cómo se juega
Das pistas escribiendo palabras sueltas (no vale la palabra ni derivadas) y tus dos famosos virtuales adivinan con una IA sencilla de asociaciones (`src/data/palabras.json`, 343 palabras con 10-12 pistas cada una). Cuando dan pistas los famosos o el presentador, adivinas tú escribiendo la palabra.

## Desarrollo
```
npm install
python3 tools/gen_palabras.py            # tools/palabras.txt -> src/data/palabras.json
npx esbuild src/main.js --bundle --format=iife --minify --outfile=js/app.js
python3 -m http.server 8768
```
- Voces Piper pregeneradas: `node tools/frases.mjs` y `python tools/gen_voces.py tools/frases.json .` (presentador es_ES davefx; famosos y concursantes daniela, sharvard, carlfm, ald). Lo variable lo lee la voz del navegador (masculina si existe).
- Pruebas: `node tools/menus.mjs`, `node tools/flujo.mjs programa normal capturas/flujo` y `node tools/entrenos.mjs`.
- Música y logo propios: Opciones › Música de la cabecera / Logo propio / Mis canciones (se guardan en IndexedDB, solo en el dispositivo), o archivos en `audio/` y `logos/`.
