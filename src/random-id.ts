/**
 * @function uuid
 * @version 1.0.0
 * @since 0.1.0
 * @author Jose Roberto Quevedo <jose@avilatek.dev>
 * @description This generate a random noise id, based on the len pased
 * @param {Number} len the length of the random id
 * @returns {String} a random id
 */
function randomID(len: number = 8): string {
  const arr = new Uint8Array(len / 2);
  crypto.getRandomValues(arr);
  return Array.from(arr, dec => `0${dec.toString(16)}`.substr(-2)).join('');
}

export default randomID;
