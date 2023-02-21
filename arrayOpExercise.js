// file:arrayOpExercise.js

const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 20) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (numberArray) => {
  return numberArray.filter(checkLength);
};

const personalisedMessage = (person) => {
  return `Hi ${person.name}! ${person.discount}% off our best candies for you today!`;
};

const generateMessages = (nameArray) => {
  return nameArray.map(personalisedMessage);
};

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

console.log(filterLongNumbers(numbers));
console.log(["4763687363", "7867867862"]);
console.log([]);

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

console.log(generateMessages(namesAndDiscounts));
