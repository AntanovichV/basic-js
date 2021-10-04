import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    return str.length;
  },
  addLink(value) {
    let str = "";
    if (value == undefined) {
      return str + `'(  )'`
    }
    return str + String(value);
  },
  removeLink(position) {
    if (Number.isInteger(position)||position<str.length) {
      throw `Error`}
    return str.split(str[position]).join('')
  },
  reverseChain() {
    return str.split('').reverse().join('')
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
