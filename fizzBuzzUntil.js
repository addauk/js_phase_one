// file: fizzBuzzUntil.js

const fizzBuzz = require("./fizzBuzz");

const fizzBuzzUntil = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log(fizzBuzz(i));
  }
};

module.exports = fizzBuzzUntil;
