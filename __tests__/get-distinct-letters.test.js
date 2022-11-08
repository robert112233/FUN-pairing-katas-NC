const getDistinctLetters = require("../katas/get-distinct-letters");

describe("getDistinctLetters", () => {
  test("Returns the entire string when passed with said string and an empty string", () => {
    expect(getDistinctLetters("", "")).toBe("");
  });
  test("Returns the entire string when passed with said string and an empty string", () => {
    expect(getDistinctLetters("hello", "")).toBe("hello");
    expect(getDistinctLetters("", "hello")).toBe("hello");
  });
  test("Returns a string of letters which only exist in one of the strings", () => {
    expect(getDistinctLetters("hello", "world")).toBe("dehwr");
  });
});
