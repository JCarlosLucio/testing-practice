export const analyze = (arr) => {
  const length = arr.length;
  const average = arr.reduce((acc, cur) => acc + cur, 0) / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { average, min, max, length };
};
