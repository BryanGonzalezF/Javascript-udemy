'use strict';

/* Array, arreglos, matrices */

var nombre = ['Bryan Gonzalez', 'Juan Lopez', 'Esteban quito'];

var lenguajes = new Array(
  'Java',
  'JS',
  'GO',
  'PHP'
); /* <--- asi definimos un objeto como array */

console.log(lenguajes);
console.log(
  nombre[1]
); /* <--- para obtener el valor que contiene el array en una posicion 
especifica se llama el array y dentro de corchetes colocamos el numero o indice que deseamos que nos muestre */

/* Los arrays tienen un indice y ese indice empieza a contar desde el 0 
esto quiere decir que nuestro primer elemento estaria en un indice 0 */

/* Para ver la longitud de un array utilizamos el metodo .length */

console.log(lenguajes.length);
/* 
var elemento = parseInt(prompt('¿Que elemento del array quieres ver?', 0));

if (elemento >= nombre.length - 1) {
  alert(
    'El elemento no existe, por favor ingrese un valor con un maximo de 0 a ' +
      (nombre.length - 1)
  );
} else {
  alert(nombre[elemento]);
} */
/* <-- logica para mostrar un elemento de en un array */
