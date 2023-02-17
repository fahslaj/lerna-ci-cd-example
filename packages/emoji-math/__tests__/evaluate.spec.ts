import { evaluate } from '../lib/evaluate';

describe('evaluate', () => {
  it('should evaluate an expression', () => {
    const result = evaluate("1️⃣2️⃣➕2️⃣✖️4️⃣");

    expect(result).toEqual("2️⃣0️⃣");
  });
});
