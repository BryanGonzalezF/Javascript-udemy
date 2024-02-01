'use strict';

// localStorage

window.addEventListener('load', () => {
  //Comprobar que el local storage esta disponible
  if (typeof Storage) {
    console.log('LocalStore Disponible');
  }

  // Guardar datos
  localStorage.setItem('titulo', 'clase de localStorage');

  // Recuperar datos
  let titulo = localStorage.getItem('titulo');

  let card = document.querySelector('.card');

  let p = document.createElement('p');
  p.innerText = titulo;
  card.append(p);
  console.log(titulo);

  // guardar objetos en localStorage

  let usuario = {
    nombre: 'Bryan',
    apellido: 'Gonzalez',
    edad: 23,
    Pais: 'El Salvador',
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
  /* Para almacenar objetos dentro del localStorage
  debemos convertirlos a string porque solo podemos
  enviarles cadenas de texto, para esto utilizamos
  JSON.stringify() */

  // Recupera objeto
  /* si queremos recuperar nuestro objeto 
 si hacemos un console.log() esto nos devolvera en un string
 ya que lo convertimos, para solucionarlo usamos JSON.parse() */

  let user = JSON.parse(localStorage.getItem('usuario'));
  console.log(user);

  /* y ahora si podemos trabajar con nuestra información
  de manera normal */

  // Eliminar datos de localStorage

  localStorage.removeItem('usuario');
});
