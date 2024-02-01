'use strict';

let divPeliculas = document.querySelector('.seccion-peliculas');

let pelicula = {
  titulo: 'Batman returns',
  year: 2009,
  pais: 'USA',
};

let peliculas = [
  { titulo: 'F&F X', year: 2023, pais: 'USA' },
  pelicula,
  { titulo: 'sonic', year: '2021', pais: 'USA' },
];
pelicula.titulo = 'Batman vs Superman';
console.log(peliculas);

for (let index in peliculas) {
  let pTitulo = document.createElement('p');

  pTitulo.append(peliculas[index].titulo + ' Año: ' + peliculas[index].year);

  divPeliculas.append(pTitulo);
}
// fin del script
