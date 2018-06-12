const binding = require('../build/Release/callbacks');

const callback = function cbackfn(desiredRecv) {
  return function cb() {
    expect(this).toEqual(desiredRecv);
  };
};

describe('callbacks bindings', () => {
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
