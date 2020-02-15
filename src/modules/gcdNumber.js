const GCD = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) return GCD(secondNumber, firstNumber);
  if (!secondNumber) return firstNumber;
  return GCD(secondNumber, firstNumber % secondNumber);
};

export default GCD;
