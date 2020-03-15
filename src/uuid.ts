/**
 * @function uuid
 * @version 1.0.0
 * @since 0.1.0
 * @author Jose Roberto Quevedo <jose@avilatek.dev>
 * @description This generate a random uuid v4 RFC compliant
 * @returns {String} a uuid v4
 */
function uuid() {
  function replacer(letter: string): string {
    const parsedCase = parseInt(letter, 10);
    const randomValues = crypto.getRandomValues(new Uint8Array(1));
    return (parsedCase ^ (randomValues[0] & (15 >> (parsedCase / 4)))).toString(
      16
    );
  }
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, replacer);
}

export default uuid;
