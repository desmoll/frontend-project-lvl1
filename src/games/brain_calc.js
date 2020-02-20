import getRandomInt from '../utils.js';
import run from '../index.js';

const task = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculator = new Map([
  ['+', (a, b) => (a + b)],
  ['-', (a, b) => (a - b)],
  ['*', (a, b) => (a * b)],
]);
const getGameData = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const operatorRandom = operators[getRandomInt(0, operators.length - 1)];
  const calculate = calculator.get(operatorRandom);
  const correctAnswer = calculate(firstNumber, secondNumber);
  const question = `${firstNumber} ${operatorRandom} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};

export default () => run(getGameData, task);
