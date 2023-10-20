'use strict';

function holaMundo(texto) {
  console.log(texto);
  console.log(numero);
  var numero2 = 2;
}

var texto = 'hola mundo soy una variable global';
var numero = 23;

holaMundo(texto);

/* Las variables definidas dentro de una funcion no pueden ser llamadas desde el scope global porque nos devolvera
un mensaje de error de que la variable no esta definida, pero si dentro de la función llamamos una variable en scope global esta se 
mostrara sin problema */

console.log(typeof numero);
