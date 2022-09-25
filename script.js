/*
    A game of rock, paper, scissors to be played against the computer via the console
*/
/* DOM manipulation*/
const choices = document.querySelectorAll('.selections button');

choices.forEach(button => button.addEventListener('click', playRound));

/* Game Logic */
const WIN = 1;
const TIE = 0;
const LOSE = -1;

let playerSelection, computerSelection;
let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3)) + 1; // Random # between 1 and 3
    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function updateMessage(message) {
    messageText = document.querySelector('.message');
    messageText.innerText = message;
}

function updateGameState(result) {
    let message = "TIE";
    winMessage = "YOU WIN! " + playerSelection + " beats " + computerSelection;
    loseMessage = "YOU LOSE, LOSER!! " + computerSelection + " beats " + playerSelection;

    if(result === WIN) {
        message = winMessage;
    } else if(result === LOSE) {
        message = loseMessage;
    }
    console.log(message);
    
}

// Return values: +1 player wins, 0 tie, -1 computer wins
function playRound()  {
    computerSelection = getComputerChoice();
    playerSelection = this.classList.value;

    console.log("Player choice: " + playerSelection + " and Computer choice: " + computerSelection);

    if (playerSelection == computerSelection) {
        updateGameState(TIE);
        return;
    }

    // switch has ruled out ties, just need to check if you won, if not you lost
    switch(playerSelection) {
        case "rock":
            updateGameState ((computerSelection == "scissors") ? WIN : LOSE);
            break;
        case "paper":
            updateGameState ((computerSelection == "rock") ? WIN : LOSE);
            break;
        case "scissors":
            updateGameState ((computerSelection == "paper") ? WIN : LOSE);
            break;
    }
}

