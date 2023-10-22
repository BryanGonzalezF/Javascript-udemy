'use strict';

/* 
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt('Ingrese un numero'));
var numero2 = parseInt(prompt('Ingrese un numero'));

for (let i = numero1; i <= numero2; i++) {
  if (i % 2 === 1) {
    document.write('<p>' + i + ' Es un numero impar</p>' + '<br>');
  }
}
