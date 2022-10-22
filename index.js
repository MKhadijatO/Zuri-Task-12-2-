const username = prompt ("Enter your name"); 
console.log(`Welcome ${username}`)

let i = 2;

for (; i < 10; i++){
  let guess = parseInt(prompt (`Guess a number between 1 and ${i}`));
  console.log (`${username}, the number you guessed is ${guess}`)
  
let comGuess = Math.floor(Math.random() * i) + 1;
  console.log(`The correct number is ${comGuess}`)
  
  if (comGuess === guess){
    console.log(`Congrats! Your point is  ${i-1}; 
    Stage ${i}`)
  }
  else{
    console.log("Game Over!")
    break
  }
  
}








