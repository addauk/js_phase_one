// file: sumOfAll.js

const sumOfAll = (numArray) => {
  total = 0
  numArray.forEach(element => {
    total += element;
  });
  return total;
};

console.log(sumOfAll([1,2,3,4,5]));