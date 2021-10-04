import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 export default {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
    if (String(value) == undefined) value = ''
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!(position ^ 0 === position) || position > this.chain.length - 1 || position <= 0) {
        this.chain = [];
        throw new Error(`You can't remove incorrect link!`)
    }
    this.chain.splice(position - 1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};