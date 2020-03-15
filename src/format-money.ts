interface FormatMoneyOptions {
  isInCents?: boolean;
  decimalComa?: boolean;
  currency?: string;
}
/**
 * @function formatMoney
 * @version 1.0.0
 * @since 0.1.0
 * @author Jose Roberto Quevedo <jose@avilatek.dev>
 * @description This is function that format a number in a currency style
 * @param {Number | String | null | undefined} amount this formatting field.
 * @param {FormatMoneyOptions | undefined } opts the option to format
 * @returns {String} a formatted result of the amount
 */
function formatMoney(
  amount: number | string | null | undefined,
  { isInCents = true, decimalComa = true, currency = '' }: FormatMoneyOptions = {}
): string {
  if (amount === null || amount === undefined) {
    return '-';
  }
  let _amount = Number(amount);
  if (isInCents) {
    _amount /= 100; // divide to 100 to go from 100 cents to 1 dollar
  }
  const intl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const parsed = intl
    .format(_amount)
    .replace('$', '')
    .replace(/USD/gi, '')
    .trim();
  if (decimalComa) {
    const [int, dec] = parsed.split('.');
    return `${currency} ${int.replace(/,/gi, '.')},${dec}`.trim();
  }
  return `${currency} ${parsed}`.trim();
}

export default formatMoney;
