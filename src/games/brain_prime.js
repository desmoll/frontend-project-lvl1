import getRandomInt from '../randomNumber.js';
import userGreeting from '../index.js';

const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no". ';
const getGameAssignments = () => {
    
   
    const randomNum = getRandomInt(1,500);

    const isPrime = (number) => {
        if (number <= 1) return false;
        for (let i = 2; i <= number / 2; i += 1) {
            if (number % i === 0) return false;
        }
        return true;
    };

    let correctAnswer = isPrime(randomNum) ? 'yes' : 'no';      
    const theTask = `${randomNum}`
    const startBrainPrimeGame = [theTask, correctAnswer];
    return startBrainPrimeGame;   
};
        
export default () => userGreeting(getGameAssignments, taskText);
        
