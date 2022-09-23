/*
    A game of rock, paper, scissors to be played against the computer via the console
*/

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3)) + 1; // Random # between 1 and 3
    console.log("Confirming choice is an integer between 1 and 3: " + choice);
    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

console.log(getComputerChoice());

