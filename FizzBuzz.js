checkIfMultipleOfThree = function(number) {
  if (number % 3 === 0) return true;
};

checkIfMultipleOfFive = function(number) {
  if (number % 5 === 0) return true;
};

exports.checkIfMultipleOfThreeAndFive = function(number) {
  var isMultipleOfThree = checkIfMultipleOfThree(number);
  var isMultipleOfFive = checkIfMultipleOfFive(number);

  if (isMultipleOfThree && isMultipleOfFive) {
    return "FizzBuzz";
  } else if (isMultipleOfThree) {
    return "Fizz";
  } else if (isMultipleOfFive) {
    return "Buzz";
  }
};
