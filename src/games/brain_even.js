import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js';

const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameAssignments = () => {
  const randomNumber = getRandomInt(1, 100);
  const isEven = () => randomNumber % 2 === 0;
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => userGreeting(getGameAssignments, taskText);
