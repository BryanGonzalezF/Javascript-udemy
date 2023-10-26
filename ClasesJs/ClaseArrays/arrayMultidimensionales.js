'use strict';

let categorias = ['Accion', 'Terror', 'Comedia'];
let peliculas = ['la verdad duele', 'La vida es bella', 'Detective Pikachu'];

let cine = [categorias, peliculas];

console.log(cine[0][1]);

/* Para mostrar el elemento de un array multidimensional, siempre debemos pasar el 
indice de todas las dimensiones en el array en este caso tenemos 2 dimensiones
entonces pasamos 2 indices */

/* var newElement = '';
do {
  newElement = prompt('Ingrese su pelicula');
  peliculas.push(newElement);
} while (newElement != 'Acabar');

peliculas.pop(); */

/* Para eliminar el ultimo elemento en un array podemos usar el metodo .pop() pero si queremos eliminar un 
elemento en una posicion especifica tenemos que hacer lo siguiente */

let indice = peliculas.indexOf('la verdad duele');
if (indice > -1) {
  peliculas.splice(
    indice,
    1
  ); /* el metodo splice nos ayuda a reemplazar o eliminar elemento en un array pasandole dos argumentos
  el primero seria el indice donde queremos que empiece y el segundo seria la cantidad de elemento queremos eliminar o reemplazar o agregar y si queremos agregar o reemplazar
  el valor a reemplazar o agregar deberan ser un tercer parametro o el numero de parametros dependera de los elementos que queremos agregar o reemplazar
 */
}

/* convertir array a un string  */

/* para convertir un array en un string debemos utilizar el metodo .join y debemos almacenarlo dentro de una variable */
let peliculasStr = peliculas.join(', ');

/* De string a array  */

/*  se utiliza para dividir una cadena de texto en un array de substrings basándose en un separador especificado se pueden pasar 1 o 2 parametros
el primero es el separador que podemos poner solo comillas y el espacio o si estan separados por coma dentro de las comillas agregamos la coma
el segundo parametro es el limite que es un numero opcional que especifica el número maximo de elementos en el array resultante */

let cadena = 'Hola, como estan, amigos';

let cadenaArr = cadena.split(', ');

console.log('================');

console.log(peliculasStr);
console.log('================');

console.log(cadenaArr);

/* Ordenar arrays */
/* para ordener los arrays tanto alfabetica como numericamente podemos utilizar el metodo sorte que nos lo ordenara en orden alfabetico en caso de ser texto
y en caso de ser numeros debemos hacer una funcion para que lo ordene de menor a mayor o vicebersa 
o el metodo reverse nos ayuda a ordenar el array en orden contrario de como lo agregamos  */
console.log('================');

peliculas.sort();

console.log(peliculas);
console.log('================');

/* recorrer un array con for in */
/* el for in es otra manera que tenemos para recorrer arrays y solo debemos 
crear una variable en este caso elemento y decirle que este en 'in' peliculas y para mostralo pasariamos elemento como indice en peliculas */

for (let elemento in peliculas) {
  console.log(peliculas[elemento]);
}

console.log('================');

/* Busquedas en arrays */

let busqueda = peliculas.find(function (pelicula) {
  return pelicula == 'Detective Pikachu';
});

console.log(busqueda);

/* otro metodo seria: */

let busqueda2 = peliculas.find((pelicula) => pelicula === 'Detective Pikachu');

console.log('================');
console.log(busqueda2);

/* tambien podemos utilizar de la misma manera que el find el findIndex */

/* con el metodo some podemos verificar si hay elementos dentro de un array que sean menores o mayores al valor que le estamos dando */

let precios = [10, 30, 20, 40, 50];

var busquedaprecios = precios.some((precio) => precio >= 20);

console.log('================');
console.log(busquedaprecios);

/* Esto nos devolvera en true si la condicional se cumple o false si no se cumple */
