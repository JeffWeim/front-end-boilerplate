import * as module from '../src/assets/scripts/math';

describe('addition(): ', function() {
  it('can do addition', function() {
    let value = module.addition(2, 2);
    expect(value).toEqual(4);
  });
});

describe('subtraction(): ', function() {
  it('can do subtraction', function() {
    let value = module.subtraction(4, 2);
    expect(value).toEqual(2);
  });
});