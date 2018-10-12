checkIfMultipleOfThree = function(number) {
  if (number % 3 === 0) return true;
};

checkIfMultipleOfFive = function(number) {
  if (number % 5 === 0) return true;
};

exports.checkIfMultipleOfThreeAndFive = function(number) {
  if (checkIfMultipleOfThree(number) && checkIfMultipleOfFive(number)) {
    return "FizzBuzz";
  } else if (checkIfMultipleOfThree(number)) {
    return "Fizz";
  } else if (checkIfMultipleOfFive(number)) {
    return "Buzz";
  }
};
