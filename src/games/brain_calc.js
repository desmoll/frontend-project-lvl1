import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js';

const taskText = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
let correctAnswer;

const getGameAssignments = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const operationsRandom = operations[getRandomInt(1, 3) - 1];
  switch (operationsRandom) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  const question = `${firstNumber} ${operationsRandom} ${secondNumber}`;
  const startBrainCalcGame = [question, correctAnswer];
  return startBrainCalcGame;
};
export default () => userGreeting(getGameAssignments, taskText);
