const sumArgs = require("../katas/sum-args");

describe("sumArgs", () => {
  test("When passed no arguments, 0 is returned", () => {
    expect(sumArgs()).toBe(0);
  });
  test("When passed one argument the same argument is returned", () => {
    expect(sumArgs(1)).toBe(1);
  });
  test("Returns the sum of multiple passed arguments", () => {
    expect(sumArgs(1, 2, 3)).toBe(6);
  });
});
