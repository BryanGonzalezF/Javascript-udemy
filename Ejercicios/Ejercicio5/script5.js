'use strict';

/* 
Mostrar todos los numeros divisores de un numero introducido en prompt
*/

var numero = parseInt(prompt('Ingrese un numero'));

document.write(
  '<h2>Los numeros que son divisores de: ' + numero + ' son:</h2>'
);
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    document.write('<p> ' + i + ' </p>', '<br>');
  }
}
