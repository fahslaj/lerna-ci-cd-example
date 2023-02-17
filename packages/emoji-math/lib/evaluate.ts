import { symbols } from './symbols';

const toString = (symbol: string): string | undefined =>
  symbols.find((pair) => pair[0] === symbol)?.[1];
const toSymbol = (str: string): string | undefined =>
  symbols.find((pair) => pair[1] === str)?.[0];

export function evaluate(expression: string): string {
  let expressionString = expression;
  symbols.forEach(
    (symbol) =>
      (expressionString = expressionString.replace(symbol[0], symbol[1]))
  );
  return expressionString;
}

console.log(evaluate('1️⃣2️⃣➕2️⃣✖️4️⃣'));
