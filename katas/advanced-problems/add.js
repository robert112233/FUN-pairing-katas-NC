/*
Write a function, add, that adds from two invocations.
E.g. add(1)(3) --> 4
var add8 = add(8)
add8(2) --> 10
*/

function add(num1) {
  return (num2) => num1 + num2;
}

module.exports = add;
