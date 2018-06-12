const bindingPath = '../build/Release/function_arguments';
const binding = require(bindingPath);

describe('function arguments module', () => {
  it(`add() returns 8 when called with 3 and 5`, () => {
    const result = binding.add(3, 5);
    const expected = 8;
    expect(result).toEqual(expected);
  });
});
