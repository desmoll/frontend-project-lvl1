import readlineSync from 'readline-sync';

const roundsCount = 3;
const userGreeting = (getGameAssignments, taskText) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n${taskText} `);
  for (let i = 0; i < roundsCount; i += 1) {
    const [theTask, correctAnswer] = getGameAssignments();
    console.log(`Question:${theTask}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer.toString() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations,${userName} `);
};

export default userGreeting;
