/*
    A game of rock, paper, scissors to be played against the computer via the console
*/

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

function playRound(playerSelection, computerSelection) {
    let winMessage = "YOU WIN! " + playerSelection + " beats " + computerSelection;
    let loseMessage = "YOU LOSE, LOSER!! " + computerSelection + " beats " + playerSelection;

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

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = sanitizeChoice(prompt("Are you ready to RUUUUUUMBLE? Choose ROCK, PAPER, ooooor scissors"));
        computerSelection = getComputerChoice();
        resultMessage = playRound(playerSelection, computerSelection);
        alert(resultMessage);
        if (resultMessage.includes("WIN")) score++;
    }
    console.log("Your score was " + score + " out of 5!");
}

game();
/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("Computer randomly chose: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));
*/