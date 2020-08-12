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
});
