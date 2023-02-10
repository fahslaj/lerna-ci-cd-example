'use strict';

const { expressions } = require('../lib/expressions');
const { randomExpression } = require('../lib');

describe('randomExpression', () => {
  it('should return a string', () => {
    const result = randomExpression();

    expect(typeof result).toBe('string');
  });

  it('should return a code from the list of possible expression codes', () => {
    const result = randomExpression();

    expect(expressions).toContain(result.codePointAt(0));
  });
});
