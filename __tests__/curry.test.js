const curry = require("../katas/advanced-problems/curry");

describe("curry", () => {
  test("Returns a function that will take a second argument", () => {
    function add(a, b) {
      return a + b;
    }
    function mul(a, b) {
      return a * b;
    }
    function someStuff(a, b) {
      return a * b + a;
    }
    const add3 = curry(add, 3);
    const mul3 = curry(mul, 3);
    const someStuffWith8 = curry(someStuff, 8);

    expect(add3(10)).toBe(13);
    expect(mul3(10)).toBe(30);
    expect(someStuffWith8(4)).toBe(40);
    expect(curry(add, 1)(2)).toBe(3);
  });
});
