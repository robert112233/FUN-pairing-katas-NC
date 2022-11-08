const lengthenDate = require("../katas/lengthen-date");

describe("lengthenDate", () => {
  test.only("Returns the date in the correct format", () => {
    expect(lengthenDate("19.04.2017")).toEqual("Wednesday 19th April 2017");
    expect(lengthenDate("7.11.2022")).toEqual("Monday 7th November 2022");
  });
});
