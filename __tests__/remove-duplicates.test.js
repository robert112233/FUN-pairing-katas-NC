const removeDuplicates = require("../katas/remove-duplicates");

describe("removeDuplicates", () => {
  test("returns an empty array when passed an empty array", () => {
    expect(removeDuplicates([])).toEqual([]);
  });
  test("returns the same array if there are no duplicates", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test("removes Duplicates", () => {
    expect(removeDuplicates([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
