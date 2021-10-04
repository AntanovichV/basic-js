import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 export default class VigenereCipheringMachine {
  constructor(isDirect) {
    this.reverse = (isDirect === false) ? true : false;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let adjustedKey = '', i, shift = 0, oldIndex, res = '';

    for (i = 0; i < message.length; i++) {
      if (alphabetString.indexOf(message[i]) >= 0) {
        adjustedKey += key[(i - shift) % key.length];
      } else {
        adjustedKey += message[i];
        shift++;
      }
    }

    for (i = 0; i < message.length; i++) {
      shift = alphabetString.indexOf(adjustedKey[i]);
      oldIndex = alphabetString.indexOf(message[i]);
      res += (oldIndex >= 0) ? alphabetString[(oldIndex + shift) % 26] : message[i];
    }

    if (this.reverse) {
      res = res.split('').reverse().join('');
    }
    return res;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let adjustedKey = '', i, shift = 0, newIndex, oldIndex, rev = '';

    for (i = 0; i < encryptedMessage.length; i++) {
      if (alphabetString.indexOf(encryptedMessage[i]) >= 0) {
        adjustedKey += key[(i - shift) % key.length];
      } else {
        adjustedKey += encryptedMessage[i];
        shift++;
      }
    }

    shift = 0;
    for (i = 0; i < encryptedMessage.length; i++) {
      newIndex = alphabetString.indexOf(encryptedMessage[i]);
      if (newIndex < 0) {
        shift++;
        rev += encryptedMessage[i];
        continue;
      }
      shift = alphabetString.indexOf(adjustedKey[i]);
      oldIndex = newIndex - shift;
      if (oldIndex < 0) oldIndex += 26;

      rev += alphabetString[oldIndex];
    }

    if (this.reverse) {
      rev = rev.split('').reverse().join('');
    }

    return rev;
  }
}