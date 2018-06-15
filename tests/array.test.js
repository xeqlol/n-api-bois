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
    expect(() => binding.TestGetElement(array, array.length + 1)).toThrow();
  });

  it("throws if index is not positive", () => {
    expect(() => binding.TestGetElement(array, -2)).toThrow();
  });

  it("TestGetElement(index) returns element with passed index", () => {
    array.forEach((el, index) => {
      expect(binding.TestGetElement(array, index)).toEqual(el);
    });
  });

  it("New(array) returns same passed array", () => {
    expect(binding.New(array)).toEqual(array);
  });

  it("TestHasElement(array, 0) returns true if array has element with index 0", () => {
    expect(binding.TestHasElement(array, 0)).toBe(true);
  });

  it("TestHasElement(array, array.length + 1) returns false index is out of bounds", () => {
    expect(binding.TestHasElement(array, array.length + 1)).toBe(false);
  });

  it("NewWIthLength() returns object that is instance of Array", () => {
    expect(binding.NewWithLength(0)).toBeType("array");
    expect(binding.NewWithLength(1)).toBeType("array");
    expect(binding.NewWithLength(4294967295)).toBeType("array");
  });

  it("TestDeleteElement(array, 2) deletes element with index 2 from array", () => {
    const arr = ["a", "b", "c", "d"];

    expect(arr.length).toBe(4);
    expect(2 in arr).toBe(true);
    expect(binding.TestDeleteElement(arr, 2)).toBe(true);
    expect(arr.length).toBe(4);
    expect(2 in arr).toBe(false);
  });
});

expect.extend({
  toBeType(received, argument) {
    const initialType = typeof received;
    const type =
      initialType === "object"
        ? Array.isArray(received)
          ? "array"
          : initialType
        : initialType;
    return type === argument
      ? {
          message: () => `expected ${received} to be type ${argument}`,
          pass: true
        }
      : {
          message: () => `expected ${received} to be type ${argument}`,
          pass: false
        };
  }
});
