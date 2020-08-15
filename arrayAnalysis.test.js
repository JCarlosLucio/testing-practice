import { analyze } from './arrayAnalysis';

describe('analyze', () => {
  describe('individual props', () => {
    test('average', () => {
      expect(analyze([1, 4]).average).toBe(2.5);
    });
  });
});
