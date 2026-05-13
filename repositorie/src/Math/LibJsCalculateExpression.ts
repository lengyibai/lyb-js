import { Decimal } from "decimal.js";

/** @description 计算表达式字符串 */
export const libJsCalculateExpression = (expression: string, point = 2) => {
  expression = expression.replace(/\s+/g, "");

  const operators: Record<string, number> = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const toDecimal = (value: string) => new Decimal(value);
  const isOperator = (char: string) => ["+", "-", "*", "/"].includes(char);
  const isNumber = (char: string) => /[0-9.]/.test(char);

  const evaluate = (inputExpression: string): Decimal => {
    const outputQueue: (string | Decimal)[] = [];
    const operatorStack: string[] = [];
    let index = 0;

    while (index < inputExpression.length) {
      const char = inputExpression[index];

      if (isNumber(char)) {
        let numStr = "";

        while (index < inputExpression.length && isNumber(inputExpression[index])) {
          numStr += inputExpression[index];
          index++;
        }

        outputQueue.push(toDecimal(numStr));
        continue;
      }

      if (char === "(") {
        operatorStack.push(char);
        index++;
        continue;
      }

      if (char === ")") {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== "(") {
          outputQueue.push(operatorStack.pop()!);
        }

        operatorStack.pop();
        index++;
        continue;
      }

      if (isOperator(char)) {
        while (
          operatorStack.length > 0 &&
          operators[operatorStack[operatorStack.length - 1]] >= operators[char]
        ) {
          outputQueue.push(operatorStack.pop()!);
        }

        operatorStack.push(char);
        index++;
        continue;
      }

      throw new Error(`无效字符: ${char}`);
    }

    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop()!);
    }

    const calcStack: Decimal[] = [];

    for (const token of outputQueue) {
      if (typeof token !== "string") {
        calcStack.push(token);
        continue;
      }

      const b = calcStack.pop()!;
      const a = calcStack.pop()!;

      switch (token) {
        case "+":
          calcStack.push(a.add(b));
          break;
        case "-":
          calcStack.push(a.sub(b));
          break;
        case "*":
          calcStack.push(a.mul(b));
          break;
        case "/":
          if (b.eq(0)) {
            throw new Error("除数不能为零");
          }
          calcStack.push(a.div(b));
          break;
      }
    }

    return calcStack.pop()!;
  };

  try {
    return Number(evaluate(expression).toFixed(point, Decimal.ROUND_DOWN));
  } catch (error: any) {
    throw new Error(`表达式计算失败：${error.message}`);
  }
};
