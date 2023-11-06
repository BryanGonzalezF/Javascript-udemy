'use strict';

window.addEventListener('load', () => {
  function intervalo() {
    let tiempo = setInterval(() => {
      console.log('Set interval ejecutado');
      var encabezado = document.querySelector('h1');
      if (encabezado.style.fontSize == '50px') {
        encabezado.style.fontSize = '30px';
      } else {
        encabezado.style.fontSize = '50px';
      }
    }, 500);
    return tiempo;
  }
  let tiempo = intervalo();
  let btnStop = document.querySelector('.btn1');
  btnStop.addEventListener('click', () => {
    clearInterval(tiempo);
    alert('has detenido el SetInterval');
  });

  let btnStart = document.querySelector('.iniciar');
  btnStart.addEventListener('click', () => {
    alert('estas iniciando el intervalo en bucle');
    intervalo();
  });
});
