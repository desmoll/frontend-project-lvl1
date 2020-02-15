import getRandomInt from '../modules/randomNumber.js';
import userGreeting from '../index.js';
import isPrime from '../modules/primeNumber.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no". ';
const getGameData = () => {
  const randomNumber = getRandomInt(1, 500);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = randomNumber.toString();
  return [question, correctAnswer.toString()];
};

export default () => userGreeting(getGameData, task);
