function getComputerChoice() {

// Generate a random number between 0 and 2
const randomNumber = Math.floor(Math.random() * 3);

// Map the random number to one of the choices: Rock, Paper, or Scissors
switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
}
}



const computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, Paper or Scissors?");
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  let playerSelectionLower = playerSelection.toLowerCase();

  if (playerSelectionLower === "rock" && computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
  } else if (playerSelectionLower === "rock" && computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
  } else if (playerSelectionLower === "rock" && computerSelection === "rock") {
      return "Tied! You both chose Rock";
  } else if (playerSelectionLower === "paper" && computerSelection === "rock") {
      return "You Win! Paper beats Rock";
  } else if (playerSelectionLower === "paper" && computerSelection === "paper") {
      return "Tied! You both chose Paper";
  } else if (playerSelectionLower === "paper" && computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
  } else if (playerSelectionLower === "scissors" && computerSelection === "rock") {
      return "You Lose! Rock beats Paper";
  } else if (playerSelectionLower === "scissors" && computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
  } else if (playerSelectionLower === "scissors" && computerSelection === "scissors") {
      return "Tied! You both chose Scissors";
  }    
            return "Invalid Input, please enter either Rock, Paper, or Scissors";
}

function playGame() {

}
  
const roundResult = playRound(playerSelection, computerSelection);
console.log(computerSelection);
console.log(roundResult);


