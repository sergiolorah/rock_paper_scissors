/* Write a function that return randomly rock, paper or scissors
use math.random then round the number to 2 digits
then use conditionals between 0-0.33 0.34-0.66 0.67-1*/

function getComputerChoice(){
  let choice = Math.random();
  round = parseFloat(choice.toFixed(2));
  if (round >=0 && round <= 0.33) {
    return "rock";
  }else if (round >=0.34 && round <= 0.66){
    return "paper";
  }else{
    return "scissors";
  }
}

console.log(getComputerChoice());

/* Write a function that asks the user for a choice and stores it in a variable*/

function getHumanChoice(){
  let choice = prompt("Choose rock, paper or scissors:");
  return choice;
}

console.log(getHumanChoice());
