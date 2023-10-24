'use strict';

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['la verdad duela', 'La vida es bella'];

var cine = [categorias, peliculas];

console.log(cine[0][1]);
document.write(cine[0][2]);

/* Para mostrar el elemento de un array multidimensional, siempre debemos pasar el 
indice de todas las dimensiones en el array en este caso tenemos 2 dimensiones
entonces pasamos 2 indices */
