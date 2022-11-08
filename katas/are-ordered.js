/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(arr) {
  if (!arr.length) return false;
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i], "Current Index", arr[i - 1] + 1, "Previous Index");

    if (arr[i] !== arr[i - 1] + 1) {
      return false;
    }
  }
  return true;
}

module.exports = areOrdered;
