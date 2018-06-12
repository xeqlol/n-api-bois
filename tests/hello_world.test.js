const bindingPath = '../build/Release/hello_world';
const binding = require(bindingPath);

describe('hello world bindings', () => {
  it(`hello() prints 'world'`, () => {
    const result = binding.hello();
    const expected = 'world';
    expect(result).toEqual(expected);
  });

  it(`doesn't crash on multiple loading of the same bindings`, () => {
    delete require.cache[bindingPath];
    const rebinding = require(bindingPath);
    const result = rebinding.hello();
    const expected = 'world';
    expect(result).toEqual(expected);
    expect(rebinding.hello).toStrictEqual(binding.hello);
  });
});
