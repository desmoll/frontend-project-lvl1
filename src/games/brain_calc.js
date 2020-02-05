//startBrainCalcGame
import getRandomInt from '../randomNumber.js';
import readlineSync from 'readline-sync';

function startBrainCalcGame() {
    const roundsCount = 3;
    let index = 1;
    const operations = ['+', '-', '*'];
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}! \nWhat is the result of the expression? `);

  while (index <= roundsCount) {
      let firstNumber = getRandomInt(1, 100);
      let secondNumber = getRandomInt(1, 100);
      let operationsRandom = operations[getRandomInt(1, 3) - 1];
      console.log(`Question:${firstNumber} ${operationsRandom} ${secondNumber}`);
      const userAnswer = readlineSync.question('Your answer:');
      let rightAnswer;

      switch(operationsRandom) {
          case '+':
          rightAnswer = firstNumber + secondNumber;
          break;
          case '-':
          rightAnswer = firstNumber - secondNumber;
          break;
          case '*':
          rightAnswer = firstNumber * secondNumber;
          break;
          default:
          break;
      }
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
export default startBrainCalcGame;