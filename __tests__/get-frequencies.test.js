const getFrequencies = require("../katas/get-frequencies");

describe("getFreqencies", () => {
  test("Returns an empty object when passed an empty string", () => {
    expect(getFrequencies("")).toEqual({});
  });
  test("returns an object containing the correct keys", () => {
    expect(Object.keys(getFrequencies("hello"))).toEqual(["h", "e", "l", "o"]);
  });
  test("returns an object with the correct character frequencies", () => {
    expect(getFrequencies("hello")).toEqual({
      h: 1,
      e: 1,
      l: 2,
      o: 1,
    });
  });
});
