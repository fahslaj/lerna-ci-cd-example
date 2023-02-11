import { range } from './range';

// list of hex codes of emoji expressions
export const expressions = [
  // U+2639 to U+263A
  ...range(0x2639, 0x263a),
  // U+1F600 to U+1f644
  ...range(0x1f600, 0x1f644),
  // U+1F910 to U+1F917
  ...range(0x1f910, 0x1f917),
  // U+1F920 to U+1F92F
  ...range(0x1f920, 0x1f92f),
  // U+1F970 to U+1F976
  ...range(0x1f970, 0x1f976),
  // U+1F978 to U+1F97A
  ...range(0x1f978, 0x1f97a),
  // U+1FAE0 to U+1FAE4
  ...range(0x1fae0, 0x1fae4),
];
