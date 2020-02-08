import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js';

const taskText = 'What number is missing in the progression?'
const getGameAssignments = () => {
    const progressionLength = 10;
    const startingNumber = getRandomInt(0, 50); //определяем число, с которого начнется прогрессия
    const progressionStep = getRandomInt(1, 20); //определяем шаг прогрессии
    const theTask = [];
    const hiddenNumberIndex = getRandomInt(0, progressionLength - 1); //определяем индекс числа, которое будет скрыто ..
    const correctAnswer = String(startingNumber + progressionStep * hiddenNumberIndex);

        for (let i = 0; i < progressionLength; i += 1) {
            if (i === hiddenNumberIndex) {
                theTask.push('..');
            } else {
                theTask.push(startingNumber + progressionStep * i);
            }
        }
        const startBrainProgressionGame = [theTask, correctAnswer];
        return startBrainProgressionGame;
};

export default () => userGreeting(getGameAssignments, taskText);
