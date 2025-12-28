/* Write a function that return randomly rock, paper or scissors
use math.random then round the number to 2 digits
then use conditionals between 0-0.33 0.34-0.66 0.67-1*/

/*keep tracking of the scores with 2 variables*/
const computerScore = 0;
const humanScore = 0;

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

/* Write a function that asks the user for a choice and stores it in a variable*/

function getHumanChoice(){
  let choice = prompt("Choose rock, paper or scissors:");
  return choice.toLowerCase();
}

/* Write a function with humanchoice and computerchoice as arguments and declare a winner, adding the score and show a message*/
function playRound(computerchoice , humanchoice){
  console.log(computerchoice);
  console.log(humanchoice);
  
  
  if (computerchoice === 'rock'){
    switch (humanchoice) {
      case 'paper':
        humanScore++;
        return 'You Win! paper beats rock.';
      case 'scissors':
        computerScore++;
        return 'You Lose! rock beats scissors';
      case 'rock':
        return "It's a tie!"
    }
  } else if (computerchoice === 'paper'){
      switch (humanchoice) {
        case 'rock':
          computerScore++;
          return 'You Lose! paper beats rock.';
        case 'scissors':
          humanScore++;
          return 'You Win! scissors beats paper';
        case 'paper':
          return "It's a tie!"
    }
  } else{
      switch (humanchoice) {
        case 'rock':
          humanScore++;
          return 'You Win! rock beats scissors.';
        case 'paper':
          computerScore++;
          return 'You Lose! scissors beats paper';
        case 'scissors':
          return "It's a tie!"
    }
  }
}

console.log(playRound(getComputerChoice(),getHumanChoice()));
console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);

