/*
  The function mergeArrays should take 2 arrays and merges them into one array, taking one item from each array at a time.
  If the arrays are of uneven length, then simply continue adding elements from the longest array onto the end of the merged array.
  E.g. [1, 2, 3] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c']
  [1, 2, 3, 4, 5] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c', 4, 5]
*/

function mergeArrays(arr1, arr2) {
  let longArr = arr1;
  let shortArr = arr2;
  bothArr = [];

  if (arr1.length < arr2.length) {
    longArr = arr2;
    shortArr = arr1;
  }

  for (let i = 0; i < longArr.length; i++) {
    if (longArr[i]) bothArr.push(longArr[i]);
    if (shortArr[i]) bothArr.push(shortArr[i]);
  }
  return bothArr;
}

module.exports = mergeArrays;
