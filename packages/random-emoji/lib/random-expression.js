'use strict';

const { expressions } = require('./expressions');

function randomExpression() {
  const randomIndex = Math.floor(Math.random() * expressions.length);
  return String.fromCodePoint(expressions[randomIndex]);
}

module.exports = { randomExpression };
