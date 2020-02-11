import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js';

const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no". ';
const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const getGameAssignments = () => {
  const randomNum = getRandomInt(1, 500);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = randomNum.toString();
  const startBrainPrimeGame = [question, correctAnswer];
  return startBrainPrimeGame;
};

export default () => userGreeting(getGameAssignments, taskText);
