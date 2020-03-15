/**
 * @function uppertify
 * @version 1.0.0
 * @since 0.1.0
 * @author Jose Roberto Quevedo <jose@avilatek.dev>
 * @description This is function that safely uppercase a variable
 * @param {String | null | undefined | Number | Object} amount this formatting field.
 * @returns {String} an uppercase version of the value
 */
function uppertify(value: string | null | undefined | number | object): string {
  if (value === null || value === undefined) {
    return '-';
  }
  const typeOfValue = typeof value;
  if (typeOfValue === 'string' || typeOfValue === 'number') {
    return String(value).toUpperCase();
  }
  return JSON.stringify(value).toUpperCase();
}

export default uppertify;
