exports.checkIfMultipleOfThree = function(number) {
  if (number % 3 === 0) return "Fizz";
  };

 exports.checkIfMultipleOfFive = function(number) {
  if (number % 5 === 0) return "Buzz";
  };

 exports.checkIfMultipleOfThreeAndFive = function(number) {
  if (number % 5 === 0 && number % 3 === 0) return "FizzBuzz";
  };

