const username = prompt("what is your name?");
console.log("welcome ${username}");
let points = 0;
let level = 1;
let maxStage = 5;
let isAlive = true;
let winner = false;
for (i = 2; i < 10; i++) {
  let comGuess = math.floor(math.random() * i) + 1;
  let userGuess = parseInt(prompt('Enter a number between i and i'));
  if (comGuess < i) {
    console.log("Please try again")
  }
  else if (comGuess === i) {
    console.log("you've won")
    winner = true
  }
  else (comGuess > i){
    console.log("you've lost")
    isAlive = false
  }
  console.log(isAlive)
}