/*
    A game of rock, paper, scissors to be played against the computer via the console
*/
/* DOM manipulation*/
const choices = document.querySelectorAll('.selections button');

choices.forEach(button => button.addEventListener('click', playRound));

/* Game Logic */
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

function sanitizeChoice(choice) {
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors"){
        return choice;
    } else alert("Didn't choose rock, paper, or scissors... You had to choose " + choice + " instead.");
    
}

function playRound()  {
    const computerSelection = getComputerChoice();
    const playerSelection = this.classList.value;
    const winMessage = "YOU WIN! " + playerSelection + " beats " + computerSelection;
    const loseMessage = "YOU LOSE, LOSER!! " + computerSelection + " beats " + playerSelection;

    console.log('entering round, playerSelection: ' + playerSelection);
    console.log('computerSelection: ' + computerSelection);

    if (playerSelection == computerSelection) {
        return "TIE! You both chose " + playerSelection;
    }

    // switch has ruled out ties, just need to check if you won, if not you lost
    switch(playerSelection) {
        case "rock":
            return (computerSelection == "scissors") ? winMessage : loseMessage;
        case "paper":
            return (computerSelection == "rock") ? winMessage : loseMessage;
        case "scissors":
            return (computerSelection == "paper") ? winMessage : loseMessage;
    }

    console.log("How did you get here?");
}

