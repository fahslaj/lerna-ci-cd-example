/**
 * Gets an array of all numbers in a given range, inclusive.
 * @param {number} startAt
 * @param {number} endAt
 * @returns array of all numbers from startAt to endAt, inclusive.
 */
export const range = (startAt: number, endAt: number) => [
  ...Array.from({ length: endAt - startAt + 1 }, (_, i) => startAt + i),
];
