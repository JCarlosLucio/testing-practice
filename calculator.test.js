import { calculator } from './calculator';

describe('calculator', () => {
  test('add', () => {
    expect(calculator.add(5, 4)).toBe(9);
  });
  test('substract', () => {
    expect(calculator.substract(5, 4)).toBe(1);
  });
});
