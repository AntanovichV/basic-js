import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 export default function getSeason(fakeDate) {
  
  if (!fakeDate) {
    return 'Unable to determine the time of year!'
  }

  if (!(fakeDate instanceof Date) || Object.keys(fakeDate).length !== 0) {
    throw new Error('Invalid date!')
  } else {
    if (
      fakeDate.getMonth() === 2 ||
      fakeDate.getMonth() === 3 ||
      fakeDate.getMonth() === 4
    ) {
      return 'spring'
    }
    if (
      fakeDate.getMonth() === 5 ||
      fakeDate.getMonth() === 6 ||
      fakeDate.getMonth() === 7
    ) {
      return 'summer'
    }
    if (
      fakeDate.getMonth() === 8 ||
      fakeDate.getMonth() === 9 ||
      fakeDate.getMonth() === 10
    ) {
      return 'fall'
    }
    if (
      fakeDate.getMonth() === 11 ||
      fakeDate.getMonth() === 0 ||
      fakeDate.getMonth() === 1
    ) {
      return 'winter'
    }
  }
}