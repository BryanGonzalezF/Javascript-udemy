'use strict';

/* Calculadora que pida 2 numeros al usuario 
    si introducimos uno mal que nos lo vuelva a pedir
    - En el cuerpo de la pagina y en una alerta los resultados de: suma, resta, multiplicacion y division
*/

var numero1 = parseInt(prompt('Introduzca un número', 0));
var numero2 = parseInt(prompt('Introduzca un segundo número', 0));

while (numero1 < 0 || isNaN(numero1)) {
  numero1 = parseInt(prompt('Introduzca un número', 0));
}

while (numero2 < 0 || isNaN(numero2)) {
  numero2 = parseInt(prompt('Introduzca un segundo número', 0));
}

/* var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

document.write('<p> ' + numero1 + ' + ' + numero2 + ' = ' + suma + ' </p>');
document.write('<p> ' + numero1 + ' - ' + numero2 + ' = ' + resta + ' </p>');
document.write(
  '<p> ' + numero1 + ' X ' + numero2 + ' = ' + multiplicacion + ' </p>'
);
document.write('<p> ' + numero1 + ' / ' + numero2 + ' = ' + division + ' </p>'); */

/* Otra solucion: */

var resultado =
  'La suma es: ' +
  (numero1 + numero2) +
  '<br>' +
  'La resta es: ' +
  (numero1 - numero2) +
  '<br>' +
  'La multiplicación es: ' +
  numero1 * numero2 +
  '<br>' +
  'La división es: ' +
  numero1 / numero2 +
  '<br>';

var resultado2 =
  'La suma es: ' +
  (numero1 + numero2) +
  '\n' +
  'La resta es: ' +
  (numero1 - numero2) +
  '\n' +
  'La multiplicación es: ' +
  numero1 * numero2 +
  '\n' +
  'La división es: ' +
  numero1 / numero2 +
  '\n';

/* para hacer saltos de linea en html se utiliza <br>, pero cuando los queremos realizar en la consola o en un alert
  debemos utilizar \n, porque sino leera el <br> como un string */

document.write(resultado);
alert(resultado2);
