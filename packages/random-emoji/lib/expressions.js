'use strict';

const { range } = require('./range');

// list of hex codes of emoji expressions
const expressions = [];
// U+2639 to U+263A
expressions.push(...range(0x2639, 0x263a));
// U+1F600 to U+1f644
expressions.push(...range(0x1f600, 0x1f644));
// U+1F910 to U+1F917
expressions.push(...range(0x1f910, 0x1f917));
// U+1F920 to U+1F92F
expressions.push(...range(0x1f920, 0x1f92f));
// U+1F970 + U+1F97A
expressions.push(...range(0x1f970, 0x1f97a));
// U+1FAE0 to U+1FAE4
expressions.push(...range(0x1fae0, 0x1fae4));

module.exports = { expressions };
