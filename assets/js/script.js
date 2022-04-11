let options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        let playerInput = this.value;

        let computerOptions = ["Rock", "Paper", "Scissors"];
        let computerInput = computerOptions[Math.floor(Math.random() * 3)];

        
        compareInputs(playerInput, computerInput);
        updateScore();
        if (checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
        }
    });
});
// Draw
function compareInputs(playerInput, computerInput) {
    let currentMatch = `${playerInput} vs ${computerInput}`;
    if (playerInput === computerInput) {
        alert(`${currentMatch} is a Draw🤝`);
        return;
    }
    // Check for Rock
    if (playerInput === "Rock") {
        if (computerInput === "Scissors") {
            alert(`${currentMatch} = You Win👏`);
            playerScore++;
        } else {
            alert(`${currentMatch} = CPU Wins🥲`);
            computerScore++;
        }
    }
    //Check for Paper
    else if (playerInput === "Paper") {
        if (computerInput === "Rock") {
            alert(`${currentMatch} = You Win👏`);
            playerScore++;
        } else {
            alert(`${currentMatch} = CPU Wins🥲`);
            computerScore++;
        }
    }
    //Check for Scissors
    else {
        if (computerInput === "Paper") {
            alert(`${currentMatch} = You Win👏`);
            playerScore++;
        } else {
            alert(`${currentMatch} = CPU Wins🥲`);
            computerScore++;
        }
    }
}


function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        let winner =
            playerScore === 5 ?
            "🥳Congratulations! You win the game!" :
            "☠️Game Over!! You lost the game!";
        alert(winner);
        return true;
    }
    return false;
}
