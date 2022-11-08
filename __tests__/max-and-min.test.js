const { max, min } = require("../katas/max-and-min");

describe("max and min", () => {
  test("When passed an empty array, 0 is returned", () => {
    expect(max([])).toBe(0);
    expect(min([])).toBe(0);
  });
  test("When passed an array with a single element, that element is returned", () => {
    expect(max([1])).toBe(1);
    expect(min([1])).toBe(1);
  });
  test("When passed an array, the highest/lowest element is returned", () => {
    expect(max([1, 2, 3])).toBe(3);
    expect(min([4, 5, 6])).toBe(4);
  });
});
