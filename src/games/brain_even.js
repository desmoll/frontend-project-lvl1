import getRandomInt from '../randomNumber.js';
import readlineSync from 'readline-sync';

function startBrainEvenGame() {
  const roundsCount = 3;
  let index = 1;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \nAnswer "yes" if the number is even, otherwise answer "no".`);

  while (index <= roundsCount) {
    const randomNumber = getRandomInt(1, 100);
    const even = (randomNumber) => randomNumber % 2 === 0;
    console.log(`Question:${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = even(randomNumber) ? 'yes' : 'no';
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
    index += 1;
  }
  console.log(`Congratulations,${userName} `);
}
export default startBrainEvenGame;
