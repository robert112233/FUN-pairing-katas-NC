/*
  The function getMostRepeated should take a string and return the character that is most repeated throughout the string, ignoring whitespace and special characters. If two characters are both equally common, return the one that comes first alphabetically.
  If you have already implemented the getFrequencies function, it may be helpful! It is imported into this file for you to use if you wish.
*/

const getFrequencies = require("./get-frequencies");

function getMostRepeated(str) {
  let count = 0;
  let currentMostRepeated = "";
  frequenciesObj = getFrequencies(str);

  for (frequency in frequenciesObj) {
    if (frequenciesObj[frequency] > count && frequency !== " ") {
      count = frequenciesObj[frequency];
      currentMostRepeated = frequency;
    }
  }
  return currentMostRepeated;
}

module.exports = getMostRepeated;
