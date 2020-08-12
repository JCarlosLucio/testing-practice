export const capitalize = (string = '') => {
  if (typeof string !== 'string') throw new Error('Only strings are allowed');
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
