export const caesar = (string, shift = 1) => {
  return [...string].map((letter) => letterShift(letter, shift)).join('');
};

const letterShift = (letter, shift = 1) => {
  // uppercase A-Z
  let a = 65,
    z = 90;
  if (letter.charCodeAt(0) > 90) {
    // lowercase a-z
    (a = 97), (z = 122);
  }
  return charShift(letter, shift, a, z);
};

const charShift = (char, shift = 1, min = 0, max = 255) => {
  let charCode = char.charCodeAt(0);
  if (charCode >= min && charCode <= max) {
    const range = max - min + 1;
    charCode = ((charCode + shift - min) % range + range) % range + min;
  }
  return String.fromCharCode(charCode);
};
