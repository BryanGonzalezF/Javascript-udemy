'use strict';

window.addEventListener('load', function () {
  let formulario = document.querySelector('#formPeliculas');
  formulario.addEventListener('submit', function () {
    console.log('hola');
    let titulo = document.querySelector('#addPelicula').value;
    localStorage.setItem(titulo, titulo);
  });

  let ul = document.querySelector('.sectionPeliculas');
  for (let i in this.localStorage) {
    let li = document.createElement('li');
    if (typeof localStorage[i] === 'string') {
      li.append(localStorage[i]);
      ul.append(li);
    }
  }
  let deleteFormulario = document.querySelector('#formDeletePeliculas');
  deleteFormulario.addEventListener('submit', function () {
    console.log('hola');
    let deleteTitulo = document.querySelector('#deletePelicula').value;
    localStorage.removeItem(deleteTitulo);
  });
}); // fin del script
