function getPlayerChoice() {
    let playerChoice = prompt("ROCK    |    PAPER    |    SCISSORS");
    return playerChoice.toUpperCase();
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    return (randomNumber === 0) ? "ROCK" :
           (randomNumber === 1) ? "PAPER" :
           (randomNumber === 2) ? "SCISSORS" : undefined;
}


function playRound(playerChoice = getPlayerChoice(), computerChoice = getComputerChoice()) {
    if (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") {
        console.log("You made a TYPO! Let's play again!");
        return playRound();
    }

    console.log("");
    console.log(`Player: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log("It's a TIE! Let's play again!");
        return playRound();
    }

    return playerChoice === "ROCK" && computerChoice === "SCISSORS" ||
           playerChoice === "PAPER" && computerChoice === "ROCK" ||
           playerChoice === "SCISSORS" && computerChoice === "PAPER";
}


function game() {
    const BEST_OF = 5;

    console.log("BEST-OF-FIVE!");
    console.log("");

    let playerScore = 0,
        computerScore = 0;

    while (playerScore < BEST_OF && computerScore < BEST_OF) {
        let playerWon = playRound();
        
        if (playerWon) {
            console.log("You WIN!");
            playerScore++;
        } else {
            console.log("You LOSE!");
            computerScore++;
        }

        console.log(`Player ${playerScore} x ${computerScore} Computer`);
    }
    
    if (playerScore === BEST_OF) {
        return "YOU BEAT THE COMPUTER! CONGRATULATIONS!!!";
    }
    return "THE COMPUTER WON! YOU SUCK LMAO..";
}
