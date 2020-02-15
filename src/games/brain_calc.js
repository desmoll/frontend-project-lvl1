import getRandomInt from '../modules/randomNumber.js';
import userGreeting from '../index.js';
import operationsActions from '../modules/operationsRandom.js';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getGameData = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const operationsRandom = operations[getRandomInt(1, 3) - 1];
  const correctAnswer = (operationsActions.get(operationsRandom))(firstNumber, secondNumber);
  const question = `${firstNumber} ${operationsRandom} ${secondNumber}`;
  const startBrainCalcGame = [question, correctAnswer.toString()];
  return startBrainCalcGame;
};

export default () => userGreeting(getGameData, task);
