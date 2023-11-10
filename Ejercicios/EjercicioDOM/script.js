'use strict';

window.addEventListener('load', () => {
  let formulario = document.querySelector('#formInfo');
  let boxDashed = document.querySelector('.dashed');

  boxDashed.style.display = 'none';

  formulario.addEventListener('submit', () => {
    console.log('Evento submit capturado');
    let formNombre = document.querySelector('#nombre').value;
    let formApellido = document.querySelector('#apellido').value;
    let formEdad = document.querySelector('#edad').value;

    let datoUsuario = [formNombre, formApellido, formEdad];
    boxDashed.style.display = 'block';

    for (let indice in datoUsuario) {
      let parrafo = document.createElement('p');
      parrafo.append(datoUsuario[indice]);
      document.querySelector('.info').append(parrafo);
    }
  });
}); // fin del script
