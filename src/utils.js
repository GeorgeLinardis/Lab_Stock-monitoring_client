import Decimal from "decimal.js";

import { DEFAULT_LOCAL } from "./constants.js";

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

export const formatMoney = (value, currency = 'USD', locale = DEFAULT_LOCAL) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol'
  }).format(value)
}

/**
 * Formats a number as a plain localized string.
 * @param {number|string|Decimal} value
 * @param {string} [locale='el-GR']
 * @param {number} [maximumFractionDigits=2]
 * @returns {string}
 */
export const formatNumber = (value, locale = DEFAULT_LOCAL, maximumFractionDigits = 2) => {
  const num = Decimal.isDecimal(value) ? value.toNumber() : Number(value);
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits,
  }).format(num);
};

/**
 * Formats a decimal or numeric value as a percentage string.
 * @param {number|string|Decimal} value - e.g. 0.25 → "25%"
 * @param {string} [locale=DEFAULT_LOCAL]
 * @param {number} [maximumFractionDigits=2]
 * @returns {string}
 */
export const formatPercent = (value, locale = DEFAULT_LOCAL, maximumFractionDigits = 2) => {
  const num = Decimal.isDecimal(value) ? value.toNumber() : Number(value);
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits,
  }).format(num);
};

/**
 * Formats a timestamp into a readable date string.
 * Default format: "21 May 2002"
 *
 * @param {number|string|Date} timestamp - Unix timestamp (ms), or any valid Date input
 * @param {string} [locale=DEFAULT_LOCAL]
 * @param {Object} [options]
 * @returns {string}
 */
export const formatUnixTime = (
  timestamp = Date.now(),
  locale = DEFAULT_LOCAL,
  options = { day: '2-digit', month: 'short', year: 'numeric' }
) => {
  let time = Number(timestamp);

  // auto-detect seconds vs milliseconds
  if (time < 1e12) time *= 1000;

  const date = new Date(time);
  return new Intl.DateTimeFormat(locale, options).format(date);
};

// TODO find package to handle all cases
export function getLocaleByCountryCode(countryCode) {
  const locales = {
    US: "en-US",
    GR: "el-GR",
  };

  if (!(Object.keys(locales)).includes(countryCode)) {
    throw new Error("Unsupported country code");
  }

  return locales[countryCode.toUpperCase()] || DEFAULT_LOCAL;
}

// TODO find package to handle all cases
export function getLocaleByCountry(countryName) {
  const locales = {
    "United States": "en-US",
    "Greece": "el-GR",
  };

  if (!(Object.keys(locales)).includes(countryName)) {
    throw new Error("Unsupported country name");
  }

  return locales[countryName] || DEFAULT_LOCAL;
}


