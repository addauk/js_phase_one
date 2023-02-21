// file: callBackExercise.js

const printHello = () => {
  console.log('Hello!');
};


const executeAfterDelay = (seconds, fName) =>{
  setTimeout(fName,seconds*1000);
}

executeAfterDelay(5, printHello);