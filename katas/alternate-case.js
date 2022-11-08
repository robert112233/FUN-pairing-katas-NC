/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  letterArr = str.split("");
  upperLetterArr = [];
  for (let i = 0; i < letterArr.length; i++) {
    if (i % 2 === 0) {
      upperLetterArr.push(letterArr[i].toUpperCase());
    } else upperLetterArr.push(letterArr[i]);
  }
  return upperLetterArr.toString().replaceAll(",", "");
}

module.exports = alternateCase;
