// file: fizzBuzz.js

const fizzBuzz = (number) => {
  if (number % 3 === 0) {
    if (number % 5 === 0) {
      return "FizzBuzz";
    } else {
      return "Fizz";
    }
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

module.exports = fizzBuzz;
