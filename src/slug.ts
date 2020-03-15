/**
 * @function slug
 * @version 1.0.0
 * @since 0.1.0
 * @author Jose Roberto Quevedo <jose@avilatek.dev>
 * @description This generate a slug from a passed string
 * @param {String | null | undefined} candidate the candidate string to slug
 * @returns {String} a slug version of the candidate
 */
function slug(
  candidate: string | null | undefined,
  separator: string = '-',
  keep: Array<string> = ['.', '=', '-']
): string {
  if (candidate === null || candidate === undefined) {
    return '-';
  }
  return candidate
    .toLowerCase()
    .replace(/ü/gi, 'ue')
    .replace(/ä/gi, 'ae')
    .replace(/ö/gi, 'oe')
    .replace(/ß/gi, 'ss')
    .replace(/ñ/gi, 'n')
    .replace(new RegExp('[' + keep.join('') + ']', 'g'), ' ')
    .replace(/-{2,}/g, ' ')
    .replace(/^\s\s*/, '')
    .replace(/\s\s*$/, '')
    .replace(/[^\w\ ]/gi, '')
    .replace(/[\ ]/gi, separator);
}

export default slug;
