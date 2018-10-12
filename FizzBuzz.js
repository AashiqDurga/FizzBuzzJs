validateMultiplesOfThree = function(number) {
  if (number % 3 === 0) return true;
};

validateMultiplesOfFive = function(number) {
  if (number % 5 === 0) return true;
};

exports.resultFor = function(number) {
  var isMultipleOfThree = validateMultiplesOfThree(number);
  var isMultipleOfFive = validateMultiplesOfFive(number);

  if (isMultipleOfThree && isMultipleOfFive) {
    return "FizzBuzz";
  } else if (isMultipleOfThree) {
    return "Fizz";
  } else if (isMultipleOfFive) {
    return "Buzz";
  } else {
    return number.toString();
  }
};
