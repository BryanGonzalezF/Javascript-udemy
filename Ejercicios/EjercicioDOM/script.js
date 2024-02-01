'use strict';

window.addEventListener('load', () => {
  let formulario = document.querySelector('#formInfo');

  formulario.addEventListener('submit', () => {
    console.log('Evento submit capturado');
    let formNombre = document.querySelector('#nombre').value;
    let formApellido = document.querySelector('#apellido').value;
    let formEdad = document.querySelector('#edad').value;
    console.log(formNombre, formApellido, formEdad);
  });
}); // fin del script

function findFirstRepeated(gifts) {
  // Code here
  let contador = {};
  for (let i = 0; i < gifts.length; i++) {
    let numero = gifts[i];
    if (contador[numero] === undefined) {
      contador[numero] = 1;
      console.log(contador);
    } else {
      console.log(gifts[i]);
    }
  }
  return -1;
}
findFirstRepeated([2, 1, 3, 5, 3, 2]);
