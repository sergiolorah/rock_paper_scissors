/* Write a function that return randomly rock, paper or scissors
use math.random then round the number to 2 digits
then use conditionals between 0-0.33 0.34-0.66 0.67-1*/

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
const scissorButton = document.createElement('button');
scissorButton.textContent = 'Scissors';
const results = document.createElement('p');

const divButtons = document.querySelector('.buttons');
const divResults = document.querySelector('.results');
divButtons.appendChild(rockButton);
divButtons.appendChild(paperButton);
divButtons.appendChild(scissorButton);
divResults.appendChild(results)


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

/* Write a function that plays 5 rounds and keep track of the scores*/
function playGame(){
  /*keep tracking of the scores with 2 variables*/
  let computerScore = 0;
  let humanScore = 0;

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
  button.addEventListener('click',() => {
    const humanChoice = button.textContent.toLowerCase();
    divResults.innerHTML += '<p>' + (playRound(getComputerChoice(),humanChoice)) + '</p>';
    divResults.innerHTML += '<p> Computer: ' + computerScore + ' You: ' + humanScore + '</p>';
    checkWinner();
  })
  });

  /* Write a function with humanchoice and computerchoice as arguments and declare a winner, adding the score and show a message*/
  function playRound(computerchoice , humanchoice){
    let score = '<p>Computer choice: ' + computerchoice + '</p><p>Your choice:' + humanchoice + '</p>'
    
    if (computerchoice === 'rock'){
      switch (humanchoice) {
        case 'paper':
          humanScore++;
          score += 'You Win! paper beats rock.';
          return score;
        case 'scissors':
          computerScore++;
          score += 'You Lose! rock beats scissors';
          return score;
        case 'rock':
          score += "It's a tie!"
          return score;
      }
    } else if (computerchoice === 'paper'){
        switch (humanchoice) {
          case 'rock':
            computerScore++;
            score += 'You Lose! paper beats rock.';
            return score;
          case 'scissors':
            humanScore++;
            score += 'You Win! scissors beats paper';
            return score;
          case 'paper':
            score += "It's a tie!"
            return score;
      }
    } else{
        switch (humanchoice) {
          case 'rock':
            humanScore++;
            score += 'You Win! rock beats scissors.';
            return score;
          case 'paper':
            computerScore++;
            score += 'You Lose! scissors beats paper';
            return score;
          case 'scissors':
            score += "It's a tie!"
            return score;
      }
    }
  }

  function checkWinner(){
    if(computerScore == 5){
      divResults.innerHTML = '';
      divResults.innerHTML += '<h1>You Lose!</h1>';
      computerScore = 0;
      humanScore = 0;
    }else if (humanScore == 5) {
      divResults.innerHTML = '';
      divResults.innerHTML += '<h1>You Win!</h1>';
      computerScore = 0;
      humanScore = 0;
    }
  }

}

playGame();

