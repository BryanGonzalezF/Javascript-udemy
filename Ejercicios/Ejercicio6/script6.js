'use strict';

/*  
Realizar un programa que nos diga si un numero es par o impar
requisitos
1- Ventana Prompt
2- Si no es valido que solicite el numero de nuevo
*/

var numero = parseInt(prompt('Ingrese un número', 0));

while (numero < 0 || isNaN(numero)) {
  numero = parseInt(prompt('Ingrese un número'));
}

if (numero % 2 === 0) {
  alert(numero + ' Es un número par');
} else {
  alert(numero + ' Es un número impar');
}
