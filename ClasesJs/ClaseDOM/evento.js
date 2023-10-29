'use strict';

/* los eventos son interacciones o sucesos que ocurren en una página web y que pueden ser detectados y manejados 
mediante código. Estos eventos pueden ser desencadenados por acciones del usuario, como hacer clic en un boton, mover el ráton, escribir 
en un campo de formulario, cargar la página, etc */

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
