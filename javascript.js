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

let computerScore = 0;
let playerScore = 0;

for (let i = 0; i < 5; i++) {

const computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, Paper or Scissors?");

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

let roundResult = playRound(playerSelection, computerSelection);

if (roundResult.startsWith("You Win!")) {
  playerScore++;
} else if (roundResult.startsWith("You Lose!")) {
  computerScore++;
}

console.log("You chose " + playerSelection, "- Computer chose " + computerSelection);
console.log(roundResult);

}
  
if (playerScore > computerScore) {
  console.log("You win the game! Final Score: Player - " + playerScore + " Computer - " + computerScore);
} else if (playerScore < computerScore) {
  console.log("Computer wins the game! Final Score: Player - " + playerScore + " Computer - "  + computerScore);
} else {
  console.log("It's a tie! Final Score: Player - " + playerScore + " Computer - "  + computerScore);
}