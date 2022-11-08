/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs(...args) {
  const summedArgs = args.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return summedArgs;
}

module.exports = sumArgs;
