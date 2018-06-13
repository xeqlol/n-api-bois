const binding = require("../build/Release/factory_wrap");

describe("factory wrap bindings", () => {
  it(`plusOne() call doesn't collapse the universe`, () => {
    const obj = binding(10);
    expect(obj.plusOne()).toEqual(11);
    expect(obj.plusOne()).toEqual(12);
    expect(obj.plusOne()).toEqual(13);

    const obj2 = binding(20);
    expect(obj2.plusOne()).toEqual(21);
    expect(obj2.plusOne()).toEqual(22);
    expect(obj2.plusOne()).toEqual(23);
  });
});
