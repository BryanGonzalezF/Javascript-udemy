'use strict';

/* Hacer un programa que muestre todos los numeros entre dos numero introducidos por el usuario */

var numero1 = parseInt(prompt('Introduzca un numero', 0));
var numero2 = parseInt(prompt('Introduzca un numero', 0));

document.write(
  '<h2>Los numeros entre ' + numero1 + ' y ' + numero2 + ' son: </h2>'
);
for (let i = numero1; i <= numero2; i++) {
  document.write(i + '<br>');
}
