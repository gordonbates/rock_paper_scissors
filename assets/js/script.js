let options = document.querySelectorAll(".options");

options.forEach((option) => {
    option.addEventListener("click", function () {
        let playerInput = this.thyisContent;

        let computerOptions = ["Rock", "Paper", "Scissors"];
        let computerInput = cOptions[Math.floor(Math.random() * 3)];

    });
});