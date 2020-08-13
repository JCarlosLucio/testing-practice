import { calculator } from './calculator';

describe('calculator', () => {
  test('add', () => {
    expect(calculator.add(5, 4)).toBe(9);
  });
});
