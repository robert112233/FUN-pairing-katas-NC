/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  if (typeof num === "number") {
    const strNum = num.toString();
    let newNum = 0;
    for (let i = 0; i < strNum.length; i++) {
      if (parseInt(strNum[i])) {
        newNum += parseInt(strNum[i]);
      }
    }
    return newNum;
  }
}

module.exports = sumDigits;
