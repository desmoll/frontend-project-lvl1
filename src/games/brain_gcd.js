import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js';

const taskText = 'Find the greatest common divisor of given numbers. ';
const CGD = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) return CGD(secondNumber, firstNumber);
  if (!secondNumber) return firstNumber;
  return CGD(secondNumber, firstNumber % secondNumber);
};
const getGameAssignments = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = CGD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const startBrainGcdGame = [question, correctAnswer];
  return startBrainGcdGame;
};
export default () => userGreeting(getGameAssignments, taskText);
