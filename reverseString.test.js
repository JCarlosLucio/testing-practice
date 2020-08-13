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
  test('a capitalized word', () => {
    expect(reverseString('Computer')).toBe('retupmoC');
  });
  test('a sentence with punctuation', () => {
    expect(reverseString('The Odin Project is great!')).toBe(
      '!taerg si tcejorP nidO ehT'
    );
  });
});
