function getComputerChoice() {
    let i = Math.random();
    if (i >= 0 && i < 0.33) {
        return "rock";
    }

    if (i > 0.33 && i <= 0.66) {
        return "paper";
    }

    if (i > 0.66) {
        return "scissors";
    }
}

function getHumanChoice() {

    let choice = prompt("Type rock, paper, or scissors").toLowerCase();

    if (choice === "rock") {
        return "rock";
    }

    if (choice === "paper") {      
        return "paper";
    }

    if (choice === "scissors") {
        return "scissors";
    }

    else {
        return "Invalid choice. Please type rock, paper, or scissors."
    }
}   

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("You tied.");
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } 
    
        else {
            computerScore++;
            console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore < computerScore) {
        console.log(`Sorry, you lost the game with a score of ${humanScore}-${computerScore}`)
    } else if (humanScore > computerScore) {
        console.log(`You won the game with a score of ${humanScore}-${computerScore}!`)
    } else {
        console.log("It's a tie!")
    }
}

playGame();  

