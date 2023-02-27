'use strict';

let age = 17;

//1-ый вариант
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

// alert(checkAge(age));

//2-ой вариант
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

alert(checkAge(age));
