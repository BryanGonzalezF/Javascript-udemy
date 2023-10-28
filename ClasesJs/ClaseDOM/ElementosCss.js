'use strict';

let divRojos = document.getElementsByClassName('rojos');

console.log(divRojos);

for (let elementos in divRojos) {
  if (divRojos[elementos].className === 'rojos') {
    divRojos[elementos].style.background = 'red';
    divRojos[elementos].style.color = 'white';
  }
}
