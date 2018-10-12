const fizzBuzz = require('../FizzBuzz');

test("Given a number, When the number is a multiple of 3, Then return Fizz ", () => {
  var result = fizzBuzz.checkIfMultipleOfThree(3);
  expect(result).toBe('Fizz');
});

test("Given a number, When the number is a multiple of 5, Then return Buzz ", () => {
  var result = fizzBuzz.checkIfMultipleOfFive(5);
  expect(result).toBe('Buzz');
});