import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 export default function minesweeper (matrix) {
  function getAroud(i, y, matrix) {
    let result = [];
    let iMax = matrix.length - 1;
    let yMax = matrix[0].length - 1;

    for (let ii = i - 1; ii <= i + 1; ii++) {
      for (let yy = y -1; yy <= y + 1; yy++) {
        if (ii >= 0 && ii <= iMax &&  yy >= 0 && yy <= yMax && (yy != y || ii != i )) result.push([ii, yy]);
      }
    }
    return result;
  }

  let around;

  matrix.forEach((arr, i) => {
    arr.forEach((item, y) => {
      if (!item) {
        matrix[i][y] = 0;
        around = getAroud(i, y, matrix);

        around.forEach(item => {
          if (matrix[item[0]][item[1]] === true) matrix[i][y] += 1;
        })
      }
    });
  });

  matrix.forEach((arr, i) => {
    arr.forEach((item, y) => {
      if (item === true) matrix[i][y] = 1;
    });
  });

  return matrix;
}
