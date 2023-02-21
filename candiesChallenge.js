// file: candiesChallenge.js

const addToBatch = (vArray,number) =>{
  
  if (vArray.length >= 5){
    return vArray;
  }
  
  return vArray.concat(number);
};

console.log(addToBatch([1, 2, 3], 4)); 
console.log(addToBatch([], 8));
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));