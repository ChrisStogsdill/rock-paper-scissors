const rockLink = document.getElementById('rock-link');
const paperLink = document.getElementById('paper-link');
const scissorsLink = document.getElementById('scissors-link');
const gameResult = document.getElementById("result-text-output");
const scoreOutput = document.getElementById("score-output");
let playerScore = 0;
let computerScore = 0;

rockLink.addEventListener("click", function() {rockPaperScissors("rock", computerPlay())})
paperLink.addEventListener("click", function() {rockPaperScissors("paper", computerPlay())})
scissorsLink.addEventListener("click", function() {rockPaperScissors("scissors", computerPlay())})


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

function rockPaperScissors (playerSelection, computerSelection) {
    let beginningText = `You have chosen ${playerSelection}, the PC chooses ${computerSelection}:`;

    
    //tie result
    if (playerSelection == computerSelection) {
        gameResult.innerHTML = beginningText + " It is a tie!";
    }
    //player chooses rock nested if statement. 
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            gameResult.innerHTML = beginningText + " You Lose!";
            computerScore += 1;
        }
        else if (computerSelection = "scissors") {
            gameResult.innerHTML = beginningText + " You Win!";
            playerScore += 1;
        }
    }
    //player chooses paper nested if statement
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            gameResult.innerHTML = beginningText + " You Win!";
            playerScore += 1;
        }
        else if (computerSelection == "scissors") {
            gameResult.innerHTML = beginningText + " You Lose!";
            computerScore += 1;
        }
    }
    //player chooses scissors nested if statement
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            gameResult.innerHTML = beginningText + " You Lose!"
            computerScore += 1;
        } 
        else if (computerSelection == "paper") {
            gameResult.innerHTML = beginningText + " You Win!"
            playerScore += 1;
        }
    }

    scoreOutput.innerHTML = `Your score: ${playerScore}. Computer Score: ${computerScore}.`;

    setTimeout(() => {
        
    
    if (playerScore == 5) {    
        location.reload();    
        alert("You Win the game!");
        
    }
    else if (computerScore == 5) {
        alert("You Lose the game!")
        location.reload();
    } },10);
    
}


