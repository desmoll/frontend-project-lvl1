import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js';

const taskText = 'What is the result of the expression?';
const getGameAssignments = () => {
    const operations = ['+', '-', '*'];
    let firstNumber = getRandomInt(1, 100);
    let secondNumber = getRandomInt(1, 100);
    let operationsRandom = operations[getRandomInt(1, 3) - 1];
    let correctAnswer;

    switch(operationsRandom) {
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
    const theTask  = `${firstNumber} ${operationsRandom} ${secondNumber}`;
    const startBrainCalcGame = [theTask, correctAnswer];
    return startBrainCalcGame;   
};
export default () => userGreeting(getGameAssignments, taskText);
