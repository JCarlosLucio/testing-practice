import { caesar } from './caesarCipher';

describe('caesar cipher', () => {
  test('lowecase word', function() {
    expect(caesar('odin', 1)).toBe('pejo');
  });
  test('wrapping from z to a', function() {
    expect(caesar('z', 1)).toBe('a');
  });
  test('keeping the same case', function() {
    expect(caesar('Defend the East Wall of the Castle', 1)).toBe(
      'Efgfoe uif Fbtu Xbmm pg uif Dbtumf'
    );
  });
  test('punctuation', function() {
    expect(caesar('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
  });
  test('small shift', function() {
    expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  });
});
