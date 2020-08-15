import { analyze } from './arrayAnalysis';

describe('analyze', () => {
  describe('individual props', () => {
    test('average', () => {
      expect(analyze([1, 4]).average).toBe(2.5);
    });
    test('min', () => {
      expect(analyze([1, 2]).min).toBe(1);
    });
    test('max', () => {
      expect(analyze([1, 2, 3]).max).toBe(3);
    });
    test('length', () => {
      expect(analyze([1, 2, 3, 4]).length).toBe(4);
    });
  });
});
