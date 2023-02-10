import { expressions } from './expressions';

export function randomExpression() {
  const randomIndex = Math.floor(Math.random() * expressions.length);
  return String.fromCodePoint(expressions[randomIndex]);
}
