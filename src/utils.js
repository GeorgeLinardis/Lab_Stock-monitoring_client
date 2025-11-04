import Decimal from "decimal.js";

/**
 * Adds two monetary values using Decimal for precision.
 *
 * @param {number|string|Decimal} a
 * @param {number|string|Decimal} b
 * @returns {Decimal} Decimal representing the sum.
 */
export const add = (a, b) => {
  const x = Decimal.isDecimal(a) ? a : new Decimal(a);
  const y = Decimal.isDecimal(b) ? b : new Decimal(b);
  return x.plus(y);
};

/**
 * Subtracts two monetary values using Decimal for precision.
 *
 * @param {number|string|Decimal} a
 * @param {number|string|Decimal} b
 * @returns {Decimal} Decimal representing the difference.
 */
export const subtract = (a, b) => {
  const x = Decimal.isDecimal(a) ? a : new Decimal(a);
  const y = Decimal.isDecimal(b) ? b : new Decimal(b);
  return x.minus(y);
};

/**
 * Calculates what percentage `a` is of `b`.
 * @param {Decimal|string|number} a
 * @param {Decimal|string|number} b
 * @returns {{ decimal: Decimal, percent: Decimal }}
 */
export function percentageOf(a, b) {
  const x = Decimal.isDecimal(a) ? a : new Decimal(a);
  const y = Decimal.isDecimal(b) ? b : new Decimal(b);

  const decimal = x.div(y);
  const percent = decimal.mul(100);

  return { decimal, percent };
}

export const formatMoney = (value, currency = 'EUR', locale = 'el-GR') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol'
  }).format(value)
}
