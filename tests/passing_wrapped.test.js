const binding = require("../build/Release/passing_wrapped");

describe("passing wrapped bindings", () => {
  it(`works fine`, () => {
    const obj1 = binding.createObject(10);
    const obj2 = binding.createObject(20);
    const result = binding.add(obj1, obj2);
    expect(result).toEqual(30);

    /*
    obj1 = null;
    global.gc();
    expect(binding.finalizeCount()).toStrictEqual(1);
    */
  });
});
