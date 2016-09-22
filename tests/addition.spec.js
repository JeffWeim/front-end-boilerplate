import addition from '../src/assets/scripts/addition';

describe('addition(): ', function() {
  it('addition() can do math', function() {
    let value = addition(2, 2);
    expect(value).toEqual(4);
  });
});
