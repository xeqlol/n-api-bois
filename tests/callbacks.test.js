const bindingPath = '../build/Release/callbacks';
const binding = require(bindingPath);

const callback = function cbackfn(desiredRecv) {
  return function cb() {
    expect(this).toEqual(desiredRecv);
  };
};

describe('callbacks module', () => {
  it(`callback called with 'hello world' argument`, () => {
    const mockCallback = jest.fn();
    binding.runCallback(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith('hello world');
  });

  it(`callback has 'this' equals passed argument`, () => {
    function testRecv(desiredRecv) {
      binding.runCallbackWithRecv(callback, desiredRecv);
    }
    [undefined, null, 5, true, 'Hello', [], {}].forEach(testRecv);
  });
});
