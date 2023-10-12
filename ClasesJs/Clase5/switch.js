'use strict';

var edad = 25;
var imprime = '';

switch (edad) {
  case 18:
    imprime = 'Acabas de obtener tu DUI';
    break; /* siempre utilizar break para detener el flujo cuando la condición se haya cumplido */
  case 25:
    imprime = 'ya eres un adulto';
    break;
  case 40:
    imprime = 'estas entrando a la crisis de los 40';
    break;
}
console.log(imprime);
