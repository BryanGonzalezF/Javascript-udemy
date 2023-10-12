'use strict';

/* Clase condicionales  */

var edad = 18;
var nombre = 'Juan';

if (edad >= 18) {
  console.log(nombre + ' ' + 'Eres mayor de edad');
} else {
  console.log(nombre + ' ' + 'Aun eres menor de edad');
}

/* Operadores relacionales 
    Mayor: > 
    Menor: <
    Menor o igual: <=
    Mayor o igual: >=
    igualdad: == 
    igualdad e igualdad de tipo: ===
    Distinto: !=*/

/* Operadores lógicos
AND (Y): &&
OR(O): ||
Negacion: !
*/

/* Ejemplos */

/* Negación  */

if (!edad > 18) {
  console.log('Eres bebé');
} else {
  console.log('Eres un anciano');
}
