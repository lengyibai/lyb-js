import Decimal from 'decimal.js';


/** @description 计算表达式字符串
 * @param expression 表达式字符串
 * @param point 小数点精度
 * @returns 计算结果
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * const result = libJsCalculateExpression("(1+2)-(3*4)/5");
 * console.log(result); //0.6
 */
export const libJsCalculateExpression = (expression: string, point = 2) => {
  //清除所有空格
  expression = expression.replace(/\s+/g, '');

  //支持的运算符和优先级
  const operators: Record<string, number> = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  //支持的小数点精度
  const toDecimal = (value: string) => new Decimal(value);

  //判断字符是否是运算符
  const isOperator = (char: string) => ['+', '-', '*', '/'].includes(char);

  //判断字符是否是数字（包括小数点）
  const isNumber = (char: string) => /[0-9.]/.test(char);

  //解析表达式并计算
  const evaluate = (expression: string): Decimal => {
    const outputQueue: (string | Decimal)[] = [];  //输出队列
    const operatorStack: string[] = [];  //操作符栈

    let i = 0;

    while (i < expression.length) {
      const char = expression[i];

      if (isNumber(char)) {
        let numStr = '';
        //处理多位数字（支持小数）
        while (i < expression.length && isNumber(expression[i])) {
          numStr += expression[i];
          i++;
        }
        outputQueue.push(toDecimal(numStr));
      } else if (char === '(') {
        operatorStack.push(char);
        i++;
      } else if (char === ')') {
        //处理右括号，直到遇到左括号
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue.push(operatorStack.pop()!);
        }
        operatorStack.pop();  //弹出左括号
        i++;
      } else if (isOperator(char)) {
        //运算符
        while (operatorStack.length > 0 && operators[operatorStack[operatorStack.length - 1]] >= operators[char]) {
          outputQueue.push(operatorStack.pop()!);
        }
        operatorStack.push(char);
        i++;
      } else {
        throw new Error(`无效字符: ${ char }`);
      }
    }

    //把所有剩余的操作符添加到输出队列
    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop()!);
    }

    //执行运算
    const calcStack: Decimal[] = [];
    for (let token of outputQueue) {
      if (typeof token === 'string') {
        const b = calcStack.pop()!;
        const a = calcStack.pop()!;
        switch (token) {
          case '+':
            calcStack.push(a.add(b));
            break;
          case '-':
            calcStack.push(a.sub(b));
            break;
          case '*':
            calcStack.push(a.mul(b));
            break;
          case '/':
            if (b.eq(0)) throw new Error("除数不能为零");
            calcStack.push(a.div(b));
            break;
        }
      } else {
        calcStack.push(token);
      }
    }

    return calcStack.pop()!;
  };

  try {
    //调用计算器并返回结果
    const result = evaluate(expression);
    return Number(result.toFixed(point));  //保留指定的小数位数
  } catch (error: any) {
    throw new Error("表达式计算失败：" + error.message);
  }
};
