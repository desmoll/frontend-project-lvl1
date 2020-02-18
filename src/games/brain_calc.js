import getRandomInt from '../utils.js';
import run from '../index.js';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const calculator = new Map([
  ['+', (a, b) => (a + b)],
  ['-', (a, b) => (a - b)],
  ['*', (a, b) => (a * b)],
]);
const getGameData = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const operationsRandom = operations[getRandomInt(1, operations.length) - 1];
  const calculate = calculator.get(operationsRandom);
  const correctAnswer = calculate(firstNumber, secondNumber);
  const question = `${firstNumber} ${operationsRandom} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};

export default () => run(getGameData, task);
