const binding = require("../build/Release/function_factory");

describe("function factory binding", () => {
  it(`returns 'hello world' on call`, () => {
    const result = binding()();
    const expected = "hello world";
    expect(result).toEqual(expected);
  });
});
