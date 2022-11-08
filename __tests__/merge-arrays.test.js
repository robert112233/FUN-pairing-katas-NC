const mergeArrays = require("../katas/merge-arrays");

describe("mergeArrays", () => {
  test("Returns an Array", () => {
    expect(Array.isArray(mergeArrays([], []))).toEqual(true);
  });
  test("Returns the same array when the other one is empty", () => {
    expect(mergeArrays([1, 2, 3, 4, 5], [])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeArrays([], [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  test("When passed two arrays of the same length, it returns a merged array in the correct format", () => {
    expect(mergeArrays([1, 2, 3, 4, 5], ["A", "B", "C", "D", "E"])).toEqual([
      1,
      "A",
      2,
      "B",
      3,
      "C",
      4,
      "D",
      5,
      "E",
    ]);
    expect(mergeArrays(["A", "B", "C"], [1, 2, 3])).toEqual([
      "A",
      1,
      "B",
      2,
      "C",
      3,
    ]);
  });
  test("When passed two different arrays, it returns a merged array in the correct format", () => {
    expect(mergeArrays([1, 2, 3], ["A"])).toEqual([1, "A", 2, 3]);
    expect(mergeArrays(["A", "B"], [1, 2, 3])).toEqual([1, "A", 2, "B", 3]);
  });
});
