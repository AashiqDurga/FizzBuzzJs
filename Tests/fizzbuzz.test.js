const fizzBuzz = require('../FizzBuzz');

test("Given a number, When the number is a multiple of 3, Then return Fizz ", () => {
  var result = fizzBuzz.resultFor(3);
  expect(result).toBe('Fizz');
});

test("Given a number, When the number is a multiple of 5, Then return Buzz ", () => {
  var result = fizzBuzz.resultFor(5);
  expect(result).toBe('Buzz');
});

test("Given a number, When the number is a multiple of 3 and 5, Then return FizzBuzz ", () => {
  var result = fizzBuzz.resultFor(15);
  expect(result).toBe('FizzBuzz');
});

test("Given a number, When the number is not a multiple of 3 and 5, Then return the number ", () => {
  var result = fizzBuzz.resultFor(2);
  expect(result).toBe("2");
});