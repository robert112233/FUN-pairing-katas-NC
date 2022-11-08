const countTo = require("../katas/advanced-problems/count-to");

describe("countTo", () => {
  test("Returns a string", () => {
    expect(typeof countTo()).toEqual("string");
  });
  test("When passed the same value for start and end, a string of the start digit is returned", () => {
    expect(countTo(1, 1)).toEqual("1");
  });
  test("Returns a string containing all digits between the start and end values", () => {
    expect(countTo(1, 5)).toEqual("1,2,3,4,5");
  });
  test("The function can take an optional step argument", () => {
    expect(countTo(1, 10, 2)).toEqual("1,3,5,7,9");
  });
});
