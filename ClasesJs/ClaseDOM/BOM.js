'use strict';

/* Browser Object Model */

console.log(window.innerWidth);
console.log(window.innerHeight);
/* de esta manera podemos ver el ancho o alto de la ventana de nuestro navegador  */

/* otra cosa que podemos hacer es sacar el ancho o alto de la pantalla */

console.log(screen.width);
console.log(screen.height);

/* Tambien podemos ver la url donde estamos en este momento o informacion de la pagina que estemos cargando*/

console.log(window.location);
console.log(window.location.href);

/* creando una funcion y utilizando el windows.location.href = url podemos redirigir a otro sitio web */

function redirect(url) {
  window.location.href = url;
}

/* tambien podemos redirigir pero en una nueva ventana */

function abrirVentana(url) {
  /* window.open('https://google.com'); */
  window.open(url, '', 'width= 400, height = 300');
}
