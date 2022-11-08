const add = require("../katas/advanced-problems/add");

describe("add", () => {
  test("returns the correct sum after multiple invocations", () => {
    expect(add(2)(1)).toEqual(3);
  });
});
