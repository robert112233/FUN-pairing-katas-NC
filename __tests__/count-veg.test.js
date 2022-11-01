const countVeg = require("../katas/count-veg");

describe("countVeg", () => {
  test("When passed a vegetable type which isn't present in the array, 0 is returned", () => {
    expect(
      countVeg(
        [
          { name: "Parsnip", type: "root", quantity: 4 },
          { name: "Broccoli", type: "brassica", quantity: 1 },
          { name: "Carrot", type: "root", quantity: 5 },
          { name: "Onion", type: "bulb", quantity: 3 },
          { name: "Chard", type: "leaf", quantity: 3 },
          { name: "Runner beans", type: "legume", quantity: 8 },
        ],
        "notRoot"
      )
    ).toEqual(0);
  });
  test("When passed a vegetable type which isn't present in the array, 0 is returned", () => {
    expect(
      countVeg(
        [
          { name: "Parsnip", type: "root", quantity: 4 },
          { name: "Broccoli", type: "brassica", quantity: 1 },
          { name: "Carrot", type: "root", quantity: 5 },
          { name: "Onion", type: "bulb", quantity: 3 },
          { name: "Chard", type: "leaf", quantity: 3 },
          { name: "Runner beans", type: "legume", quantity: 8 },
        ],
        "root"
      )
    ).toEqual(9);
  });
});
