const binding = require("../build/Release/object_wrap");

describe("object wrap bindings", () => {
  it(`works fine`, () => {
    const obj = new binding.MyObject(9);
    expect(obj.value).toEqual(9);

    obj.value = 10;
    expect(obj.value).toEqual(10);

    expect(obj.plusOne()).toEqual(11);
    expect(obj.plusOne()).toEqual(12);
    expect(obj.plusOne()).toEqual(13);

    expect(obj.multiply().value).toEqual(13);
    expect(obj.multiply(10).value).toEqual(130);

    const newObj = obj.multiply(-1);
    expect(newObj.value).toEqual(-13);
  });
});
