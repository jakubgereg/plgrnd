const index = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(index.sum(1, 2)).toBe(3);
});

test('multiplication 4 * 3 to equal 12', () => {
  expect(index.mul(4, 3)).toBe(12);
})