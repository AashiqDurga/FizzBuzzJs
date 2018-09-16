const fizzBuzz = require('../FizzBuzz');

test("Given a number When the number is a multiple of 3 Then retutn Fizz ", () => {
  var result = fizzBuzz.checkIfMultipleOfThree(3);
  expect(result).toBe('Fizz');
});

test("Given a number When the number is a multiple of 5 Then retutn Buzz ", () => {
  var result = fizzBuzz.checkIfMultipleOfFive(5);
  expect(result).toBe('Buzz');
});