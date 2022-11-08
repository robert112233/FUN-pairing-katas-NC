/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/

function removeDuplicates(arr) {
  const setArr = [...new Set(arr)];
  return setArr;
}

module.exports = removeDuplicates;
