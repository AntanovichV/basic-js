import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 export default function countCats(matrix) {
  let cat = 0;
  for (let arr of matrix) {
    console.log(arr)
    for (let elem of arr) {
      if (elem === "^^") cat++;
    }
  }
  return cat;
}
