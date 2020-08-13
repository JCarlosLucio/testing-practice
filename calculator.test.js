import { calculator } from './calculator';

describe('calculator', () => {
  test('add', () => {
    expect(calculator.add(5, 4)).toBe(9);
  });
  test('substract', () => {
    expect(calculator.substract(5, 4)).toBe(1);
  });
  test('multiply', () => {
    expect(calculator.multiply(5, 4)).toBe(20);
  });
  test('divide', () => {
    expect(calculator.divide(5, 4)).toBe(1.25);
  });
});
