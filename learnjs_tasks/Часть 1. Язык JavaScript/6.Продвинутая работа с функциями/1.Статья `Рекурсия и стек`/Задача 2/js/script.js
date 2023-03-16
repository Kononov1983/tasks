'use strict';

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

alert( factorial(5) );


function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

alert( factorial(5) );
