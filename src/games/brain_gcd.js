import getRandomInt from '../randomNumber.js';
import readlineSync from 'readline-sync';

function startBrainGcdGame() {
    const roundsCount = 3;
    let index = 1;
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}! \nFind the greatest common divisor of given numbers. `);

    while (index <= roundsCount) {
        let firstNumber = getRandomInt(1, 100);
        let secondNumber = getRandomInt(1, 100);
        console.log(`Question:${firstNumber} ${secondNumber}`);
        const userAnswer = readlineSync.question('Your answer:');
        const CGD = (firstNumber, secondNumber) => {
            if (secondNumber > firstNumber) return CGD(secondNumber, firstNumber);
            if (!secondNumber) return firstNumber;
            return CGD(secondNumber, firstNumber % secondNumber);
        }
        let rightAnswer = CGD(firstNumber, secondNumber);
    if (userAnswer.toString() === rightAnswer.toString()) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
        return;
      }
      index += 1;

    }
    console.log(`Congratulations,${userName} `);
};
export default startBrainGcdGame;