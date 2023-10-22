'use strict';

/* bucle while */
/* en el bucle while mientras una condicion no se cumpla las iteraciones seguiran corriendo por eso se le agrega un incremento o un
decremento para que no ocasionemos un ciclo infinito  */
var year = 1990;

while (year <= 2030) {
  console.log('estamos en: ' + year);
  if (year === 2000) {
    break;
  }
  year++;
}

/* Do while */

/* El ciclo do while es similar al while con la diferencia que en el 
do while primero se ejecuta una acción antes de entrar al bucle  */
var years = 30;
do {
  console.log('este solo es un mensaje');
  years--;
} while (years > 25);

/* En los bucles también podemos utilizar el break para detener las iteraciones  */
