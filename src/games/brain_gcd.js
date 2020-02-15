import getRandomInt from '../modules/randomNumber.js';
import userGreeting from '../index.js';
import GCD from '../modules/gcdNumber.js';

const task = 'Find the greatest common divisor of given numbers. ';
const getGameData = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = GCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const startBrainGcdGame = [question, correctAnswer.toString()];
  return startBrainGcdGame;
};
export default () => userGreeting(getGameData, task);
