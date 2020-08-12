import { capitalize } from './capitalize';

describe('capitalize', () => {
  test('no argument', () => {
    expect(capitalize()).toBe('');
  });
  test('empty string', () => {
    expect(capitalize('')).toBe('');
  });
  test('single letter', () => {
    expect(capitalize('a')).toBe('A');
  });
  test('all lowercase', () => {
    expect(capitalize('abc')).toBe('Abc');
  });
  test('multiple words separated by spaces', () => {
    expect(capitalize('lorem ipsum dolor')).toBe('Lorem Ipsum Dolor');
  });
  test('ignore when first char is not a letter', () => {
    expect(capitalize('5abc')).toBe('5abc');
  });
  test('number is an error', () => {
    expect(() => capitalize(1)).toThrow(new Error('Only strings are allowed'));
  });
  test('array is an error', () => {
    expect(() => capitalize([])).toThrow(new Error('Only strings are allowed'));
  });
});
