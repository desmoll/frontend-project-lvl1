import getRandomInt from '../utils.js';
import run from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no". ';
const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const getGameData = () => {
  const randomNumber = getRandomInt(1, 500);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = randomNumber.toString();
  return [question, correctAnswer.toString()];
};

export default () => run(getGameData, task);
