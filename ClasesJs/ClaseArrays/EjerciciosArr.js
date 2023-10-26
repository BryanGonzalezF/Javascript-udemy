'use strict';

/* 
1. pida 6 numeros por pantalla y los meta en un array
2. debe mostrar el array completo en el cuerpo de la pagina y en la consola
3. Debemos ordenar el array ordenado y mostrarlo 
4. invertir el orden y mostrarlo
5. mostrar cuantos elementos tiene el array 
6. debemos hacer una busqueda de un valor introducido por el usuario, que nos diga su valor y su indice
*/

let arrNumeros = [];
let newElement = '';

/* Pedir al usuario los 6 numeros */
for (let i = 0; i < 6; i++) {
  newElement = parseInt(prompt('Ingrese un numero'));
  arrNumeros.push(newElement);
}

/* Mostrar arr por consola */
console.log(arrNumeros);

function mostrarArr(arr, textoOpcional = '') {
  document.write('<h1>contenido del array' + ' ' + textoOpcional + '</h1>');
  document.write('<ul>');
  arr.forEach((numero, index) => {
    document.write(`<li>${index}: ${numero} </li>`);
  });
  document.write('</ul>');
}

/* Mostrar en el cuerpo de la página */

mostrarArr(arrNumeros);

/* ordenar y mostrar */
arrNumeros.sort((a, b) => a - b);
console.log(arrNumeros);
mostrarArr(arrNumeros, 'ordenado');

/* Revertir orden y mostrarlo */
arrNumeros.reverse();
console.log(arrNumeros);
mostrarArr(arrNumeros, 'invertido');

/* Mostrar cuantos elementos tiene un array */

document.write(`<h2>El array contiene ${arrNumeros.length} elementos</h2>`);

/* Encontrar el numero y su posicion  */

let busqueda = parseInt(prompt('Ingrese el numero que quiere buscar'));

let posicion = arrNumeros.findIndex(
  (numeroBuscado) => numeroBuscado === busqueda
);

if (posicion != -1) {
  document.write('<h2>Su valor a sido encontrado</h2>');
  document.write(`<h2>Su posición dentro del array es: ${posicion} </h2>`);
} else {
  document.write('<h2>Su valor no ha sido encontrado</h2>');
}
