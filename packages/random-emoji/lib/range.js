'use strict';

/**
 * Gets an array of all numbers in a given range, inclusive.
 * @param {number} startAt
 * @param {number} endAt
 * @returns array of all numbers from startAt to endAt, inclusive.
 */
const range = (startAt, endAt) => [
  ...Array.from({ length: endAt - startAt + 1 }, (_, i) => startAt + i),
];

module.exports = { range };
