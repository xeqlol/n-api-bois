const binding = require("../build/Release/array");

describe("array bindings", () => {
  const array = [
    1,
    9,
    48,
    13493,
    9459324,
    { name: "hello" },
    ["world", "node", "abi"]
  ];
  it(`throws if index out of bounds`, () => {
    expect(binding.TestGetElement(array, array.length + 1)).toThrow();
  });
});
