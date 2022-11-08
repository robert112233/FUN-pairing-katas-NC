const areOrdered = require("../katas/are-ordered");

describe("areOrdered", () => {
  test("returns false when passed an empty array", () => {
    expect(areOrdered([])).toBe(false);
  });
  test("returns true when passed an array with one element", () => {
    expect(areOrdered([1])).toBe(true);
  });
  test("returns true when passed an array with one element", () => {
    expect(areOrdered([1])).toBe(true);
  });
  test("returns true when passed an array with all elements consecutive", () => {
    expect(areOrdered([1, 2, 3])).toBe(true);
  });
  test("returns true when passed an array with all elements consecutive", () => {
    expect(areOrdered([1, 2, 3])).toBe(true);
  });
  test("returns false when passed an array with all elements consecutive", () => {
    expect(areOrdered([3, 2, 1])).toBe(false);
  });
});
