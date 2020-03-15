import formatMoney from '../format-money';

// test('Format Money Function Test', () => {

// });

it("Should return '-'", () => {
  expect(formatMoney(null)).toBe('-');
});
it("Should return '-'", () => {
  expect(formatMoney(undefined)).toBe('-');
});
it('Should format correctly', () => {
  expect(formatMoney(100000)).toBe('1.000,00');
});
it('Should format correctly (cents)', () => {
  expect(formatMoney(100000, { isInCents: false })).toBe('100.000,00');
});
it('Should format correctly (currency)', () => {
  expect(formatMoney(100000, { currency: 'Bs' })).toBe('Bs 1.000,00');
});
it('Should format correctly (Decimal Coma)', () => {
  expect(formatMoney(100000, { decimalComa: false })).toBe('1,000.00');
});
it('Should format correctly (Cents & Currency)', () => {
  expect(formatMoney(100000, { isInCents: false, currency: 'Bs' })).toBe(
    'Bs 100.000,00'
  );
});
it('Should format correctly (Cents & Decimal)', () => {
  expect(formatMoney(100000, { isInCents: false, decimalComa: false })).toBe(
    '100,000.00'
  );
});
it('Should format correctly (Decimal & Currency)', () => {
  expect(formatMoney(100000, { currency: 'Bs', decimalComa: false })).toBe(
    'Bs 1,000.00'
  );
});
it('Should format Correctly (not defaults)', () => {
  expect(
    formatMoney(1000, { isInCents: false, decimalComa: false, currency: 'CAD' })
  ).toBe('CAD 1,000.00');
});
