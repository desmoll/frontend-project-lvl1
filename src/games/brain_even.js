import getRandomInt from '../modules/randomNumber.js';
import userGreeting from '../index.js';
import isEven from '../modules/evenNumber.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const number = getRandomInt(1, 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer.toString()];
};
export default () => userGreeting(getGameData, task);
