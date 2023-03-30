import { evaluate } from '../lib/evaluate';

describe('evaluate', () => {
  it('should evaluate an expression', () => {
    const result = evaluate('1️⃣2️⃣➕2️⃣✖️6️⃣➗3️⃣');

    expect(result).toEqual('1️⃣6️⃣');
  });

  it('should evaluate an expression with factorial', () => {
    const result = evaluate('3️⃣❗➕2️⃣');

    expect(result).toEqual('8️⃣');
  });
});
