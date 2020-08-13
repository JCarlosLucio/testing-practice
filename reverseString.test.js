import { reverseString } from './reverseString';

describe('reverseString', () => {
  test('no argument', () => {
    expect(reverseString()).toBe('');
  });
  test('empty string', () => {
    expect(reverseString('')).toBe('');
  });
  test('a word', () => {
    expect(reverseString('odin')).toBe('nido');
  });
});
