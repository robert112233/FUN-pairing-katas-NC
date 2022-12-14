/*
  The getFrequencies function should take a string and return an object that represents the frequencies of each character in the string. It should ignore spaces and special characters.
  E.g. 'hello world' would return:
  {
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1
  }
*/

function getFrequencies(str) {
  let charObj = {};
  charArr = str.split("");

  charArr.forEach((char) => {
    let count = 0;
    for (let i = 0; i < charArr.length; i++) {
      if (charArr[i] === char) {
        count++;
      }
    }
    charObj[char] = count;
  });
  return charObj;
}

module.exports = getFrequencies;
