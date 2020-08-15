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

  describe('complete object', () => {
    test('is object', () => {
      const actual = typeof analyze([0, 10]);
      const expected = 'object';
      expect(actual).toEqual(expected);
    });
    test('negative numbers', () => {
      const actual = analyze([5, 2, -34, 12, 7, 125, 67, 0, -495, 13]);
      const expected = {
        average: -29.8,
        min: -495,
        max: 125,
        length: 10,
      };
      expect(actual).toEqual(expected);
    });
  });
});
