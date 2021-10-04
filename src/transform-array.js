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
 export default function transform(array) {
  if (Array.isArray(array)) {
    
    let res = []
    let lb = -1;
    for (let i in array) {
      i = +i;
      if (i === lb)
        continue;
      if (array[i] == "--discard-next") {
        if (array[i + 1] != undefined)
          lb = i + 1;
        continue;
      }
      
      if (array[i] == "--discard-prev") {
        if (array[i - 1] != undefined && i-1 != lb)
          res.pop()
        continue;
      }
      
      if (array[i] == "--double-next"){
        if (array[i + 1] != undefined)
          res.push(array[i + 1]);
        continue;
      }
      
      if (array[i] == "--double-prev") {
        if (array[i - 1] != undefined && i-1 != lb)
          res.push(array[i - 1]);
        continue;
      }

      if (array[i] == "none"){
        continue;
      }
      res.push(array[i])
      
    }
    return res
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}