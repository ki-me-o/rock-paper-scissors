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
    } else console.log("Didn't choose rock, paper, or scissors... You had to choose " + choice + " instead.");
    
}

function playRound(playerSelection, computerSelection) {

}



console.log("Computer randomly chose: " + getComputerChoice());
