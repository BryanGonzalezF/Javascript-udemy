'use strict';

/* programa que pida al usuario dos numeros y que determine cual es mayor, cual es el menor o si son iguales */

var numero1 = parseInt(prompt('Ingrese un número', 0));
var numero2 = parseInt(prompt('Ingrese un número', 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt('Ingrese un número', 0));
  numero2 = parseInt(prompt('Ingrese un número', 0));
}

if (numero1 === numero2) {
  alert(numero1 + ' Es igual a ' + numero2);
} else if (numero1 > numero2) {
  alert('Numero 1: ' + numero1 + ' Es mayor a ' + 'numero 2: ' + numero2);
} else if (numero2 > numero1) {
  alert('Numero 2: ' + numero2 + ' Es mayor a ' + 'numero 1: ' + numero1);
} else {
  alert('Ingrese un numero por favor');
}
