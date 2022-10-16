const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArray;
  if (Array.isArray(arr)) {
    for (let i=0; i<arr.length; i++) { 
      if (arr[i] == '--discard-next'){
        newArray = arr;
        newArray.splice(i, 2);
        return(newArray);
      }
      if (arr[i] == '--discard-prev'){
        newArray = arr.slice();
        newArray.splice(i-1, 2);
        return(newArray);
      }
      if (arr[i] == '--double-prev'){
        newArray = arr.slice();
        let elem = arr.slice(i-1, i);
        newArray.splice(i, 1);
        newArray.splice(i, 0, +elem);
        return(newArray);
      }
      if (arr[i] == '--double-next'){
        newArray = arr.slice();
        let elem = arr.slice(i+1, i+2);
        newArray.splice(i, 1);
        newArray.splice(i, 0, +elem);
        return(newArray);
      } else {
        return arr;
      }
    }
  } 
  if (arr.length < 1) {
    return([])
  }else {
    return('arr parameter must be an instance of the Array!')
  }
}
console.log( transform([2, 5, 4]))

module.exports = {
  transform
};
