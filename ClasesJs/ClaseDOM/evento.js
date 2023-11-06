'use strict';

/* los eventos son interacciones o sucesos que ocurren en una página web y que pueden ser detectados y manejados 
mediante código. Estos eventos pueden ser desencadenados por acciones del usuario, como hacer clic en un boton, mover el ráton, escribir 
en un campo de formulario, cargar la página, etc */

/* El evento load nos ayuda a que nuestro script de js se ejecute cuando todos los elementos del HTML se hayan terminado
de cargar esto nos permite poner el llamado a nuestro script dentro del head de nuestro html */
window.addEventListener('load', () => {
  let boton = document.querySelector('.btn1');

  //Evento clic
  boton.addEventListener('click', cambiarColor);

  function cambiarColor() {
    let bg = boton.style.background;
    console.log('hola');
    if (bg == 'green') {
      boton.style.background = 'red';
    } else {
      boton.style.background = 'green';
    }
  }

  // Mouse over

  boton.addEventListener('mouseover', function () {
    boton.style.background = '#ccc';
  });

  // mouse out

  boton.addEventListener('mouseout', function () {
    boton.style.background = 'white';
  });

  var inputName = document.querySelector('#campo_nombre');
  /* eventos de focus es un evento para ver cuando estamos dando el foco o estamos dentro de un input*/

  inputName.addEventListener('focus', function () {
    console.log('[focus] estas dentro del input');
  });

  //  evento blur es para que detecte cuando estamos saliendo del input
  inputName.addEventListener('blur', function () {
    console.log('[blur] estas fuera del input');
  });

  // keydown nos ayuda a detectar que tecla esta presionando el usuario

  inputName.addEventListener('keydown', function (event) {
    console.log(
      `[keydown] estas pulsando: ${event.key}`
    ); /* <--- de esta manera capturamos el evento y lo convertimos a string */
  });

  // keypress
  inputName.addEventListener('keypress', function (event) {
    console.log(`[keypress] tecla presionada ${event.key}`);
  });

  //keyup este evento es para detectar cuando dejamos de pulsar una tecla

  inputName.addEventListener('keyup', function (event) {
    console.log(`[keyup] estas soltando la tecla ${event.key}`);
  });
});
