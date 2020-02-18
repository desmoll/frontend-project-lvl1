import getRandomInt from '../utils.js';
import run from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getGameData = () => {
  const number = getRandomInt(1, 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer.toString()];
};
export default () => run(getGameData, task);
