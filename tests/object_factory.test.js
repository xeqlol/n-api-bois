const binding = require('../build/Release/object_factory');

describe('object factory bindings', () => {
  it('create object with msg property', () => {
    const obj1 = binding('hello');
    const obj2 = binding('world');
    const str = `${obj1.msg} ${obj2.msg}`;
    const expected = 'hello world';
    expect(str).toEqual(expected);
  });
});
