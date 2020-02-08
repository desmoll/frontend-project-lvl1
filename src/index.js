import readlineSync from 'readline-sync';

let index = 0;
let roundscount = 3;
const userGreeting = (getGameAssignments, taskText) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n${taskText} `);

    while (index < roundscount) {
    const [theTask, correctAnswer] = getGameAssignments();
    console.log(`Question:${theTask}`);
    const userAnswer = readlineSync.question('Your answer:');
      if (userAnswer.toString() === correctAnswer.toString()) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
        return;
      }
    
      index += 1;
    };
console.log(`Congratulations,${userName} `);
};

export default userGreeting;
