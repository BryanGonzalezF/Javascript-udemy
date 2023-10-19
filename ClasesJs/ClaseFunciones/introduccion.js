'use strict';

/* Una función es un bloque de instrucciones que se pueden reutilizar a lo largo de nuestro código
y esto nos ayuda a no repetir tanto el código */

/* Definimos la función con un nombre */
function calculadora(numero1, numero2) {
  /* <---- Parametros */
  /* conjunto de instrucciones */
  /* console.log('Hola!');
  console.log('Me llamo Bryan'); */
  console.log('Suma: ' + (numero1 + numero2));
  console.log('Resta: ' + (numero1 - numero2));
  console.log('Multiplicación: ' + numero1 * numero2);
  console.log('División: ' + numero1 / numero2);
  console.log('*****************************');
}

/* invocar o llamar a la función */

calculadora(20, 23); /* <---- Argumentos */
calculadora(10, 20);
/* Los parametros son valores que se le pueden pasar a nuestra función para poder ingresarle valores que necesitemos manejar 
estos parametros se definen cuando se crea la funcion y se envian los argumentos cuando se hace la invocacion de la función*/

/* Parametros opcionales */

/* Son parametros que no son obligatorios de enviarselos a mi función como por ejemplo */

function calculadora2(numero1, numero2, mostrar = false) {
  if (mostrar != true) {
    console.log(
      'Su primer valor es: ' +
        numero1 +
        '\n' +
        'su segundo valor es: ' +
        numero2
    );
    console.log('Suma: ' + (numero1 + numero2));
    console.log('Resta: ' + (numero1 - numero2));
    console.log('Multiplicación: ' + numero1 * numero2);
    console.log('División: ' + numero1 / numero2);
    console.log('*****************************');
  } else {
    document.write(
      '<h3> su primer valor es: ' +
        numero1 +
        '<br>' +
        ' su segundo valor es: ' +
        numero2 +
        '</h3>'
    );
    document.write('Suma: ' + (numero1 + numero2) + '<br>');
    document.write('Resta: ' + (numero1 - numero2) + '<br>');
    document.write('Multiplicación: ' + numero1 * numero2 + '<br>');
    document.write('División: ' + numero1 / numero2 + '<br>');
    document.write('*****************************');
  }
}

var primerNumero = parseInt(prompt('Ingrese su primer valor'));
var segundoNumero = parseInt(prompt('Ingrese su segundo valor'));
var userWantToShow = Boolean(
  prompt(
    'Ingrese true si quiere mostrar el contenido o si no quiere mostrarlo dejar en blanco'
  )
);

calculadora2(primerNumero, segundoNumero, userWantToShow);

/* Dentro de las funciones podemos agregar más funciones */
