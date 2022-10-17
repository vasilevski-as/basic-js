const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = String(n);
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.slice(0, i) + str.slice(i + 1))
  }
  arr.sort((a, b) => b - a)
  return +arr[0]
  // console.log(+arr[0]);
}
deleteDigit(222219)

module.exports = {
  deleteDigit
};
