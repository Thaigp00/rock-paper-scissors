function getComputerMove() {
    let randomNumber = Math.floor(Math.random() * 3);

    return (randomNumber === 0) ? "rock" :
           (randomNumber === 1) ? "paper" :
           (randomNumber === 2) ? "scissors" : undefined;
}


function playRound(playerMove, computerMove = getComputerMove()) {
    const playerDisplayImage = document.querySelector("#player-display > img");
    playerDisplayImage.src = `images/${playerMove}-icon.png`;
    const computerDisplayImage = document.querySelector("#computer-display > img");
    computerDisplayImage.src = `images/${computerMove}-icon.png`;

    const result = document.querySelector("#result");
    const resultMessage = document.querySelector("#result-message");
    
    // If user changes the id of an item through devtools.
    if (playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors") {
        result.textContent = "WTF";
        resultMessage.textContent = "Just what did you do???";
        return undefined;
    }

    if (playerMove === computerMove) {
        result.textContent = "It's a tie!";
        resultMessage.textContent = `${playerMove} ties with ${computerMove}`;
        return "tie";
    }

    if (playerMove === "rock" && computerMove === "scissors" ||
    playerMove === "paper" && computerMove === "rock" ||
    playerMove === "scissors" && computerMove === "paper") {
        result.textContent = "You win!";
        resultMessage.textContent = `${playerMove} beats ${computerMove}`;
        return "player";
    }

    result.textContent = `You lose!`;
    resultMessage.textContent = `${playerMove} is beaten by ${computerMove}`;
    return "computer";
}


function game() {
    const winGoal = 5;
    let playerScore = 0,
        computerScore = 0;

    const result = document.querySelector("#result");
    const resultMessage = document.querySelector("#result-message");

    const itens = document.querySelectorAll(".item");
    itens.forEach(item => item.addEventListener('click', () => {
        if (playerScore < winGoal && computerScore < winGoal) {
            const winner = playRound(item.id);
            switch (winner) {
                case "player":
                    playerScore++;
                    break;
                case "computer":
                    computerScore++;
                    break;
            }

            if (playerScore === winGoal) {
                result.textContent = "YOU WON!!!!!";
                resultMessage.textContent = "Congratulations!!! Reload the page to play again!";
            }
            else if (computerScore === winGoal) {
                result.textContent = "YOU LOST...";
                resultMessage.textContent = "Reload the page and try again!!";
            }
        }

        const playerDisplayScore = document.querySelector("#player-display > h4");
        playerDisplayScore.textContent = `Player: ${playerScore}`;
        const computerDisplayScore = document.querySelector("#computer-display > h4");
        computerDisplayScore.textContent = `Player: ${computerScore}`;
    }));
}


game();
