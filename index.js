// const { format } = require("path");

const username = prompt ("What is your name?"); 


console.log(`Welcome ${username}`)

let points = 1;
// let j = 1;
// let maxLevel = 5;

let i = 2;
let guess = prompt (`Guess a number between 1 and ${i++}`);
console.log(+guess);

let comGuess = Math.floor(Math.random(1)* i++);

console.log(comGuess);

if (+guess == comGuess) { 
  console.log(`Congrats. Your point is ${points}`); i++;
  
  // print($[guess]);
//   do {
//     let guess = prompt (`Guess a number between 1 and ${i+1}`);
// console.log(+guess);

// let comGuess = Math.floor(Math.random(1)* i+1; 1++);

// console.log(comGuess);
//   } while (1 <= 6);
  }
else { 
  console.log("Game Over")
}


// do {
//   if (+guess == comGuess) { 
//   console.log(`Congrats. Your point is ${points}`);
//   }
// if else { 
//   console.log("Game Over")
// }; j++
//  else { 
//   console.log("Game Over")
// }; j++ 
// }
// while (j < 5);












// let reply = "Congratulation! "

// for (let i = 0; i < 5; i++) {
//   let comGuess = Math.floor(Math.random());
//   console.log()
 //  let guess = prompt ("Guess a number");

 //  console.log(guess);
 //  let reply;
 //  if (guess < comGuess ) { reply = "Congrats";
 // } else {
 //   reply = "Game Over";
// }
  
// }
// let reply;
// if (guess < comGuess ) { reply = "Congrats";
//  } else {
//    reply = "Game Over";
// }
