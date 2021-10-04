import { NotImplementedError } from '../extensions/index.js';

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
 export default function transform(arr) {
  let newArray = arguments[0].map(x=>x);
  if (!Array.isArray(arr)) {
    throw new Error ('\'arr\'parameter must be an instance of the Array!')
  }
  for (let i = 0; i< newArray.length; i++) {
    if (newArray[i] === '--discard-next') {
      newArray.splice(i,2)
    }
    if (newArray[i] === '--discard-prev') {
      if ((i-1)<0){newArray.splice(i,1)}
      else {newArray.splice(i-1,2)}
    }
    if (newArray[i] === '--double-next') {
      if ((newArray[i+1])===undefined) {newArray.splice(i,1)}
      else {
        newArray.splice(i,1)
        newArray.splice(i, 0, newArray[i]);
      }
    }
    if (newArray[i] === '--double-prev') {
      if ((newArray[i-1])===undefined) {newArray.splice(i,1)}
      else {
        newArray.splice(i,1)
        newArray.splice(i, 0, newArray[i-1]);
      }
    }
  }
  return newArray
}