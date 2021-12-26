const rockLink = document.getElementById('rock-link');
const paperLink = document.getElementById('paper-link');
const scissorsLink = document.getElementById('scissors-link');

//function to output rock, paper, or scissors at random
function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice == 0) {
        return "rock";
    }
    else if (randomChoice == 1) {
        return "paper";
    }
    else if (randomChoice == 2) {
        return "scissors";
    }
    else {
        return "error";
    }
}

