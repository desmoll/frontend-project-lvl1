import getRandomInt from '../utils.js';
import run from '../index.js';

const task = 'Find the greatest common divisor of given numbers. ';
const getGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) return firstNumber;
  return getGCD(secondNumber, firstNumber % secondNumber);
};
const getGameData = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = getGCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};
export default () => run(getGameData, task);
