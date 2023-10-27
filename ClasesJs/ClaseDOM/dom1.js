'use strict';

/* DOM: Document Object Model 

*/

let contenedor =
  document.getElementById(
    'micontenedor'
  ); /* Con el getElementById llamamos a la etiqueta que contenga el nombre de id que le pasemos  */

/* let btn = document.querySelector('.btn1'); */
/* con el querySelector podemos llamar a elementos de nuestro HTML ya sea con el nombre de la etiqueta, Id con # antes del nombre
con el nombre de la clase con '.' antes del nombre de la clase  */

let todosLosDiv = document.getElementsByTagName('div');

contenedor.innerText =
  'Mi nuevo texto desde js '; /* Se puede cambiar el contenido de una etiqueta HTML con 
innerText o innerHTML, no es una buena practica utilizar el innerHTML */

contenedor.style.background = '#af122214';
/* desde JS tambien podemos cambiar los estilos dependiendo de nuestras necesidades podemos hacerlo asi directamente o crear una funcion para que se ejecute 
cuando llamamos a la funcion  */

contenedor.className = 'contenedor1';
/* De esta manera podemos agregar una clases al elemento que deseemos */

console.log(contenedor);
console.log(todosLosDiv);

todosLosDiv[1].innerText = 'Hola me cambiaron el texto';
todosLosDiv[2].innerText = 'a mi tambien';

/* para llamar a todos las etiquetas js lo que hace es agregarlas a una array 
entonces para manipular cada uno debemos hacerlo como lo hariamos en un array llamando su indice */

/* todosLosDiv.forEach((valor, indice) => */

let seccion = document.querySelector('#misection');

for (let valor in todosLosDiv) {
  if (typeof todosLosDiv[valor].textContent === 'string') {
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(todosLosDiv[valor].textContent);
    parrafo.appendChild(
      texto
    ); /* append y appendChild los utilizamos para añadir elementos despues de lo que tengamos creado en html 
    appendChild agrega un solo nodo al final y append agrega varios nodos al final*/

    seccion.append(
      parrafo
    ); /* prepend es agregar nodos o elementos al principio*/
  }
}
let hr = document.createElement('hr');
seccion.append(hr);
