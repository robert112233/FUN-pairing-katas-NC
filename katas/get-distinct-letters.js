/*
  The function getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.

  For example, when given 'hello' and 'world', the function should return 'dehrw'
  This is because h and e are in 'hello' but not in 'world', and w, r and d are in 'world' but not in 'hello'. hewrd' sorted => 'dehrw'
*/

function getDistinctLetters(str1, str2) {
  str1Arr = str1.split("");
  str2Arr = str2.split("");

  uniqueArr = [];

  str1Arr.forEach((letter) => {
    if (!str2Arr.includes(letter)) {
      uniqueArr.push(letter);
    }
  });

  str2Arr.forEach((letter) => {
    if (!str1Arr.includes(letter)) {
      uniqueArr.push(letter);
    }
  });

  sortedUnique = uniqueArr.sort();
  return sortedUnique.toString().replaceAll(",", "");
}

module.exports = getDistinctLetters;

// beasts.indexOf(letter);
