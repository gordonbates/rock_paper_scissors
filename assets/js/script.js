let options = document.querySelectorAll(".options");

options.forEach((option) => {
    option.addEventListener("click", function () {
        let playerInput = this.thyisContent;

        let computerOptions = ["Rock", "Paper", "Scissors"];
        let computerInput = computerOptions[Math.floor(Math.random() * 3)];

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

// Rock
if (playerInput === "Rock") {
    if (computerInput === "Scissors") {
        alert(`${currentMatch} = You Win!`);
    } else {
        alert(`${currentMatch} = Computer Wins!`);
    }
}
}
// Paper
else if (playerInput === "Paper") {
    if (computerInput === "Rock") {
        alert(`${currentMatch} = You Win!`);
    } else {
        alert(`${currentMatch} = Computer Wins!`);
    }
}
// Scissors
else {
    if (computerInput === "Paper") {
        alert(`${currentMatch} = You Win!`);
    } else {
        alert(`${currentMatch} = Computer Wins!`);
    }
}
}