import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 export default function encodeLine(str) {
  if (str.length == "") return ""; 

  let code = "";
  str = str.split("");
  let i = 0;
  let cnt = 1;
  while (i < str.length - 1){
    if (str[i] == str[i + 1]){
      i++;
      cnt++;
    }
    else {
      if (cnt > 1) code += cnt.toString();
      code += str[i];
      cnt = 1;
      i++;
    }
  }
  if (cnt > 1) code += cnt.toString();
  code += str[i];

  return code;
}