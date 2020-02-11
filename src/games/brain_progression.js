import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js';

const taskText = 'What number is missing in the progression?';
const progressionLength = 10;
const getGameAssignments = () => {
  const startingNumber = getRandomInt(0, 50);// число, с которого начнется прогрессия
  const progressionStep = getRandomInt(1, 20);// определяем шаг прогрессии
  const question = [];
  const hiddenNumberIndex = getRandomInt(0, progressionLength - 1);// число, которое будет скрыто
  const correctAnswer = String(startingNumber + progressionStep * hiddenNumberIndex);
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenNumberIndex) {
      question.push('..');
    } else {
      question.push(startingNumber + progressionStep * i);
    }
  }
  const startBrainProgressionGame = [question, correctAnswer];
  return startBrainProgressionGame;
};

export default () => userGreeting(getGameAssignments, taskText);
