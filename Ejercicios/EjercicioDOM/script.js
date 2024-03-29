'use strict';

window.addEventListener('load', () => {
  let formulario = document.querySelector('#formInfo');
  let boxDashed = document.querySelector('.dashed');

  boxDashed.style.display = 'none';

  formulario.addEventListener('submit', function () {
    console.log('Evento submit capturado');
    console.log(this);
    let formNombre = document.querySelector('#nombre').value;
    let formApellido = document.querySelector('#apellido').value;
    let formEdad = parseInt(document.querySelector('#edad').value);

    let datoUsuario = [formNombre, formApellido, formEdad];

    if (formNombre.trim() === null || formNombre.trim().length === 0) {
      alert('Los datos no son validos');
      return false;
    }

    if (formApellido.trim() === null || formApellido.trim().length === 0) {
      alert('Los datos no son validos');
      return false;
    }

    if (formEdad === null || formEdad <= 0 || isNaN(formEdad)) {
      alert('Los datos no son validos');
      return false;
    }

    boxDashed.style.display = 'block';

    for (let indice in datoUsuario) {
      let parrafo = document.createElement('p');
      parrafo.append(datoUsuario[indice]);
      document.querySelector('.info').append(parrafo);
    }
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
