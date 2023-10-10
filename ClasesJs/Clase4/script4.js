'use strict';

/* tipos de datos  */

var numero_entero = 8;
var cadena_de_texto = 'Hola como estan todos';
var booleano = false;

/* en los lenguajes de programación contamos con multiples tipode datos
- numero entero (int),
-cadena de texto (string) 
-booleano (boolean (verdadero o falso))
 */

/* tenemos funciones como Number() para convertir una cadena de texto a numero, pero
tambien podemos utilizar parseInt() para convertir una cadena a un numero entero o parseFloat para
convertirlo a decimales*/

/* Ejemplo */

var numero_en_cadena = '23';

console.log(parseInt(numero_en_cadena) + 2);

/* tambien podemos pasar numero a cadenas de texto con la funcion String */

/* Ejemplo */

var numero_a_cadena = 23;

console.log(String(numero_a_cadena) + 2);

/* con typeof podemos saber el tipo de dato que es nuestra variable  */

/* Ejemplo */

console.log(typeof numero_a_cadena);
console.log(typeof numero_en_cadena);
console.log(typeof booleano);
