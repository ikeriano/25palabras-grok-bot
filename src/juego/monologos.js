// Monólogos ORIGINALES del presentador virtual (con el público, al teléfono y cambiando las normas)
export const TIPO_ICONO = { publico: '👏', telefono: '📞', normas: '📜' };
export const TIPO_TXT = { publico: 'Con el público', telefono: 'Al teléfono', normas: 'Las normas' };
export const MONOLOGOS = [
  { id: 'pub-saludo', tipo: 'publico', titulo: 'Saludando a las gradas', cam: 'publico', lineas: [
    '¡Un momento! Antes de empezar quiero saludar al público.',
    'Señora de la primera fila, con una sola palabra: ¡espectacular!',
    'Caballero, ¿cuántas pistas necesita para aplaudir? ¿Ninguna? ¡Así me gusta!',
    'Los del fondo, que también os veo. ¡Una ovación de veinticinco palabras!',
    '¡Gracias! Vuelvo al atril antes de que se me acaben las palabras.'] },
  { id: 'pub-cumple', tipo: 'publico', titulo: 'Un cumpleaños en el público', cam: 'publico', lineas: [
    'Me cuentan que hoy hay alguien de cumpleaños en las gradas.',
    'Te voy a felicitar con pistas: velas, tarta, regalos… ¡Exacto, felicidades!',
    'Y como regalo, te dejo que me digas una palabra. ¿Bote? ¡Esa no, que es nuestra!',
    '¡Un aplauso para el cumpleañero!'] },
  { id: 'tel-madre', tipo: 'telefono', titulo: 'Llama mi madre', cam: 'presentador', lineas: [
    'Perdonad, que me suena el móvil… ¡Es mi madre!',
    '¿Sí, mamá? Sí, estoy en directo. No, no puedo darte pistas de la cena.',
    '¿Que te diga una palabra para el crucigrama? Mamá, eso es trampa.',
    'Vale, vale: siete letras, empieza por pe. ¡Paciencia! ¡Un beso!'] },
  { id: 'tel-diccionario', tipo: 'telefono', titulo: 'Llaman de la Academia', cam: 'presentador', lineas: [
    'Un segundo, que me llaman de la Academia de las palabras.',
    '¿Cómo? ¿Que hemos gastado demasiados sinónimos esta semana?',
    '¿Y que me devuelvan las tildes que se me cayeron ayer? Están en el sofá, debajo de un cojín.',
    'Gracias, gracias. ¡Que limpie, fije y dé esplendor!'] },
  { id: 'nor-nuevas', tipo: 'normas', titulo: 'Normas nuevas del plató', cam: 'general', lineas: [
    'Atención, que producción me pasa unas normas nuevas.',
    'Norma uno: prohibido decir «cosa». Cosa no es una pista, es rendirse.',
    'Norma dos: si un famoso acierta a la primera, el público grita «¡oooh!». Probamos… ¡muy bien!',
    'Norma tres: en los sofás amarillos no se duerme la siesta. Aunque sean muy cómodos.',
    '¡Y con estas normas, seguimos!'] },
  { id: 'nor-bote', tipo: 'normas', titulo: 'Cómo cuidar el bote', cam: 'banda', lineas: [
    'Os voy a explicar cómo cuidamos el bote de 25 palabras.',
    'Cada noche le leemos un cuento. Solo con veinticinco palabras, eso sí.',
    'Si nadie se lo lleva, crece cinco mil euros. Como una planta, pero con más ceros.',
    '¡Y algún día alguien se lo llevará! ¿Será hoy?'] },
];
