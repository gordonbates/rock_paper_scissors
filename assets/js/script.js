let options = document.querySelectorAll(".options");

options.forEach((option) => {
    option.addEventListener("click", function () {
        let playerInput = this.thyisContent;

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

function compareInputs(playerInput, computerInput) {
    let currentMatch = `${playerInput} vs ${computerInput}`;

    // Draw Game
    if (playerInput === computerInput) {
        alert(`${currentMatch} Draw Game!`);
        return;
    }
}
if (playerInput === "Rock") {
    if (computerInput === "Scissors") {
      alert(`${currentMatch} = You Win`);
      playerScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      computerScore++;
    }
  }
  //Check for Paper
  else if (playerInput === "Paper") {
    if (computerInput === "Rock") {
      alert(`${currentMatch} = You Win`);
      playerScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      computerScore++;
    }
  }
  //Check for Scissors
  else {
    if (computerInput === "Paper") {
      alert(`${currentMatch} = You Win`);
      playerScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      computerScore++;
    }
  }
}


let options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
  // ...
});

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
      let winner =
        playerScore === 5
          ? "Congratulations! You are the winner! "
          : "Game Over! You lost";
      alert(winner);
      return true;
    }
    return false;
  }