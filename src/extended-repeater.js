import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, options) {
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (options.addition === null) options.addition = "null";

  let inner = new Array(options.additionRepeatTimes);
  inner.fill(options.addition, 0);
  inner = inner.join(options.additionSeparator);

  let outer = new Array(options.repeatTimes);
  outer.fill(str + inner, 0);
  outer = outer.join(options.separator);

  return outer;
}