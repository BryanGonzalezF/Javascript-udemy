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
