const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let newStr = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    let litera = str[i];
    if (str[i+1] == litera) {
      count++;
    }
    else {
      if (count == 1) {
        newStr += litera;
        count = 1;
      }
      else {
        newStr += count + litera;
        count = 1;
      }
    }
  }
  return newStr
}

module.exports = {
  encodeLine
};
