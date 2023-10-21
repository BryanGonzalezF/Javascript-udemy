'use strict';

// Transformación de textos

var numero = 44;
var texto1 = 'Hola mundo Hola mundo Hola mundo';
var texto2 = 'Me llamo Bryan Gonzalez';

var dato = numero.toString(); /* <-- metodo para convertir numero en strings */
dato =
  texto1.toUpperCase(); /* <--- metodo para convertir todo el texto en mayusculas */
dato =
  texto2.toLowerCase(); /* <--- metodo para convertir todo el texto en minusculas */

console.log(dato);

var nombre = 'Bryan Alex';

console.log(
  nombre.length
); /* <--- nos sirve para ver la longitud de un string y tambien de los arrays */

/* concatenar - unir texto */

/* Template literals (plantillas de cadena) */
console.log(`El numero es igual a ${numero}`);

/* Metodo de busqueda */

/* nos ayuda a saber el indice de la posicion de la palabra o caracter que estemos buscando */
var busqueda = texto1.indexOf('mundo');

/* nos ayuda a saber el indice de la posicion de la ultima palabra que se este buscando */
busqueda = texto1.lastIndexOf('mundo');

busqueda = texto1.search('mundo');

/* si la palabra no se encuentra nos devolvera un valor de -1 para indicar que la palabra no se encuentra dentro de nuestro string */

/* El metodo match nos devolvera un array con los resultados que encuentre */

busqueda =
  texto1.match(
    'mundo'
  ); /* si lo colocamos la palabra que buscamos entre comillas solo nos mostrara el primer resultado */

busqueda =
  texto1.match(
    /mundo/gi
  ); /* pero si lo colocamos dentro de plecas y al final agregamos  "gi" que significa global nos mostrara todos los resultados dentro de un array*/

console.log(busqueda);

/* Reemplazar texto */

var busqueda2 = texto1.replace(
  'Hola',
  'todos'
); /* nos ayuda a reemplazar en la cadena la primera coincidencia con el texto que le estamos pasando y lo cambia por nuestro segundo parametro */

busqueda2 = texto1.slice(
  15,
  26
); /* este metodo es para recortar nuestro string desde el indice que le indicemos en el parametro y podemos enviar un segundo argumento que diria hasta que 
posicion queremos que aparezca*/

busqueda2 =
  texto1.split(
    ' '
  ); /* este metodo lo que hace es convertir nuestro string en un array y podemos separarlos con espacios o otro caracter que indiquemos */

busqueda2 =
  texto1.trim(); /* nos ayuda a limpiar los espacios en blanco al principio y al final de un string */
console.log(busqueda2);
