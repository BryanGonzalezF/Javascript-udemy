'use strict';

/* Funciones anonimas */

/* Es una funcion que no tiene nombre */

var peliculas = function (nombre) {
  return 'La pelicula es: ' + nombre;
};

console.log(peliculas('Iron Man'));

/* Callback */

/* Es una funcion dentro de otra */

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
  var sumar = numero1 + numero2;
  sumaYmuestra(sumar);
  sumaPorDos(sumar);

  return sumar;
}

sumame(
  6,
  7,
  function (dato) {
    console.log('La suma es ' + dato);
  },
  function (dato) {
    console.log('La suma por dos es: ' + dato * 2);
  }
);

/* Arrow functions */

/* Principalmente son para proporcionar una sintaxis más corta y clara para definir fun ciones, especialmente funciones anonimas
como podemos observar el resultado es el mismo
*/

sumame(
  6,
  7,
  (dato) => {
    console.log('La suma es ' + dato);
  },
  (dato) => {
    console.log('La suma por dos es: ' + dato * 2);
  }
);
