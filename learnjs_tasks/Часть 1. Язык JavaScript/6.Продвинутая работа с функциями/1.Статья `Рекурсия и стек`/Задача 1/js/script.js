'use strict';

function sumTo(n) {
  let result = 0;

  for (let i = 0; i <= n; i++) {
    result += i;
  }

  return result;
}

alert( sumTo(100) );


function sumTo(n) {
  if (n == 1) return 1
  return n + sumTo(n - 1);
}

alert( sumTo(100) );


function sumTo(n) {
  return n * (n + 1) / 2;
}

alert( sumTo(100) );