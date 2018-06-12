const addon = require("../build/Release/hello_world");

describe("hello world module", () => {
  it(`hello() prints 'world'`, () => {
    const result = addon.hello();
    const expected = "world";
    expect(result).toBe(expected);
  });
});
