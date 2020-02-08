import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js';

const taskText = 'Find the greatest common divisor of given numbers. ';
const getGameAssignments = () => {
    
    let firstNumber = getRandomInt(1, 100);
    let secondNumber = getRandomInt(1, 100);  
    const CGD = (firstNumber, secondNumber) => {
        if (secondNumber > firstNumber) return CGD(secondNumber, firstNumber);
        if (!secondNumber) return firstNumber;
        return CGD(secondNumber, firstNumber % secondNumber);
        }
    let correctAnswer = CGD(firstNumber, secondNumber);
   
    const theTask = `${firstNumber} ${secondNumber}` 
    const startBrainGcdGame = [theTask, correctAnswer];
    return startBrainGcdGame;   
};
export default () => userGreeting(getGameAssignments, taskText);