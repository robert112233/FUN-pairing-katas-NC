const getMostRepeated = require("../katas/get-most-repeated");

describe("getMostRepeated", () => {
  test("Returns an empty string when passed an empty string", () => {
    expect(getMostRepeated("")).toBe("");
  });
  test("When passed a string with only 1 character, said character is returned", () => {
    expect(getMostRepeated("hhh")).toBe("h");
  });
  test("When passed a string with multiple characters, the most repeated character is returned", () => {
    expect(getMostRepeated("hhijaklvn")).toBe("h");
  });
  test("The function does not count spaces", () => {
    expect(getMostRepeated("j               ")).toBe("j");
  });
});
