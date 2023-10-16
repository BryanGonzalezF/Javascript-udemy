'use strict';

/* Tabla de multiplicar de un numero introducido por el usuario */

var numero = parseInt(prompt('Ingrese un numero', 0));

while (numero < 0 || isNaN(numero)) {
  numero = parseInt(prompt('Ingrese un numero', 0));
}

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  document.write('<p> ' + numero + ' X ' + i + ' = ' + resultado + ' </p>');
}
