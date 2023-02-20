import { evaluate as mathjsEvaluate } from 'mathjs';
import { symbols } from './symbols';

const toSymbol = (str: string): string | undefined =>
  symbols.find((pair) => pair[1] === str)?.[0];

export function evaluate(expression: string): string {
  let expressionString = expression;
  symbols.forEach(
    (symbol) =>
      (expressionString = expressionString.split(symbol[0]).join(symbol[1]))
  );
  const result = String(mathjsEvaluate(expressionString));
  let resultString = '';
  for (const char of result) {
    resultString += toSymbol(char);
  }

  return resultString;
}
