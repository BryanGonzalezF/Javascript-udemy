'use strict';

/* 
Parametros REST y SPREAD 
*/

/* Los parametros de tipo rest son utiles cuando el usuario envia más argumentos que los parametros, lo que 
hace el parametro rest es que cuando lo utilizamos los argumentos extra los almacena dentro de un array */

/* Ejemplo */

function listaDelSuper(objeto1, objeto2, ...variosObjetos) {
  console.log(objeto1, objeto2, variosObjetos);
}

listaDelSuper(
  'azucar',
  'jabon',
  'bebidas',
  'shampoo',
  'lechuga'
); /* si no contaramos con un parametro rest, nuestra funcion solo almacenaria los primeros
dos argumentos en este caso azucar y jabon pero gracias a rest, el resto de parametros se iran dentro de un array */

/* Operador spread */

/* El operador spread nos ayuda a descomponer arrays o objetos y esto nos puede ayudar para copiar sus valores, crear nuevos arrays/objetos
tambien cuando tenemos una funcion que acepta 2 parametros y tenemos un array de dos elementos con el operador spread podemos enviarselos como argumentos */

/* Ejemplo */

const carros = ['toyota', 'nissan'];

function lista(carro1, carro2) {
  console.log(carro1);
  console.log(carro2);
}

lista(...carros);
