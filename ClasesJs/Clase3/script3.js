/* Tipos de variables y sus diferencias  */

/* Var */

var numero = 10;
console.log(numero); /* Su valor es de 10  */

if (true) {
  var numero = 30;
  console.log(numero); /* su nuevo valor es de 30 */
}

console.log(numero); /* Seguira mostrando un valor de 30 */

/* Let */

let pais = españa;
console.log(pais); /* El valor que mostrara sera Españá */

if (true) {
  let pais = mexico;
  console.log(pais); /* El valor que mostrara será mexico */
}

console.log(pais); /* volvera a mostrar españa */

/* esto pasa porque el uso de let es solo local si lo llamamos desde un 
bloque de código su valor solo será distino dentro de ese 
bloque  */
