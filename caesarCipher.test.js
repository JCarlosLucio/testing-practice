import { caesar } from './caesarCipher';

describe('caesar cipher', () => {
  test('lowecase word', function() {
    expect(caesar('odin', 1)).toBe('pejo');
  });
});
