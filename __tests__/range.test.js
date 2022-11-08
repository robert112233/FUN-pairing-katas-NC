const range = require("../katas/range");

describe("range", () => {
  test("It just bloody works", () => {
    expect(range(3, 5)).toEqual([5, 6, 7]);
    expect(range(3, 5, 2)).toEqual([5, 7, 9]);
    expect(range(3, 1, 100)).toEqual([1, 101, 201]);
  });
});
