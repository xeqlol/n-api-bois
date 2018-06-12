const binding = require('../build/Release/function_arguments');

describe('function arguments bindings', () => {
  it(`add() returns 8 when called with 3 and 5`, () => {
    const result = binding.add(3, 5);
    const expected = 8;
    expect(result).toEqual(expected);
  });
});
