const alternateCase = require("../katas/alternate-case");

describe("alternateCase", () => {
  test("when passed a string it is returned with the cases alternated", () => {
    expect(alternateCase("hello")).toEqual("HeLlO");
  });
  test("when passed a string with spaces it is returned with the cases alternated", () => {
    expect(alternateCase("hello world")).toEqual("HeLlO WoRlD");
  });
});
