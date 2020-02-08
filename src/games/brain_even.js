import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js'

const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameAssignments = () => {
 
    const randomNumber = getRandomInt(1, 100);
    const even = (randomNumber) => randomNumber % 2 === 0;
    const theTask = `${randomNumber}`;
    const correctAnswer = even(randomNumber) ? 'yes' : 'no';
    const startBrainEvenGame = [theTask, correctAnswer];
    return startBrainEvenGame;  
   
}
export default () => userGreeting(getGameAssignments, taskText);
