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
});
