// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

// This function picks a random choice for the computer
function getComputerChoice() {
  // Math.random() gives a number from 0 up to (but not including) 1
  const randomNumber = Math.random();

  // Split the random range into 3 equal parts
  if (randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// This function compares choices and returns the round result
function getRoundResult(playerChoice, computerChoice) {
  // If both choices are the same, nobody wins
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  // Check all winning cases for the player
  if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return "You win!";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    return "You win!";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return "You win!";
  }

  // If it is not a tie and not a player win, the computer wins
  return "Computer wins!";
}

// This function runs one turn of the game and shows both choices
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const roundResult = getRoundResult(playerChoice, computerChoice);

  resultDiv.textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice} | ${roundResult}`;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  playRound("Rock");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  playRound("Paper");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  playRound("Scissors");
});