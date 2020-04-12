const roundStatus = document.getElementById("round-status");
const playerScore = document.getElementById("player-score");
const machineScore = document.getElementById("machine-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const victoryMessage = document.getElementById("victory-message");
let i = 0;
let j = 0;

rock.addEventListener("click", function () {
    game("Rock");
})
paper.addEventListener("click", function () {
    game("Paper");
})
scissors.addEventListener("click", function () {
    game("Scissors");
})

function machineSelection() {
    selection = ["Rock", "Paper", "Scissors"];
    return selection[Math.floor(Math.random() * 3)];
}

function win() {
    document.querySelector(".full-score").classList.add("green-glow");
    setTimeout(function () {
        document.querySelector(".full-score").classList.remove("green-glow");
    }, 300)
}

function lose() {
    document.querySelector(".full-score").classList.add("red-glow");
    setTimeout(function () {
        document.querySelector(".full-score").classList.remove("red-glow");
    }, 300)
}

function draw() {
    document.querySelector(".full-score").classList.add("blue-glow");
    setTimeout(function () {
        document.querySelector(".full-score").classList.remove("blue-glow");
    }, 300)
}

function singleRound(playerChoice, machineChoice) {
    if (playerChoice == "Rock") {
        if (machineChoice == "Scissors") {
            roundStatus.innerHTML = playerChoice + " beats " + machineChoice + ". You win!";
            ++i;
            playerScore.innerHTML = i;
            win();
        } else if (machineChoice == "Paper") {
            roundStatus.innerHTML = machineChoice + " beats " + playerChoice + ". You lose!";
            ++j;
            machineScore.innerHTML = j;
            lose();
        } else {
            roundStatus.innerHTML = playerChoice + " equals " + machineChoice + ". You tied!";
            draw();
        }
    } else if (playerChoice == "Paper") {
        if (machineChoice == "Rock") {
            roundStatus.innerHTML = playerChoice + " beats " + machineChoice + ". You win!";
            ++i;
            playerScore.innerHTML = i;
            win();
        } else if (machineChoice == "Scissors") {
            roundStatus.innerHTML = machineChoice + " beats " + playerChoice + ". You lose!";
            ++j;
            machineScore.innerHTML = j;
            lose();
        } else {
            roundStatus.innerHTML = playerChoice + " equals " + machineChoice + ". You tied!";
            draw();
        }
    } else {
        if (machineChoice == "Paper") {
            roundStatus.innerHTML = playerChoice + " beats " + machineChoice + ". You win!";
            ++i;
            playerScore.innerHTML = i;
            win();
        } else if (machineChoice == "Rock") {
            roundStatus.innerHTML = machineChoice + " beats " + playerChoice + ". You lose!";
            ++j;
            machineScore.innerHTML = j;
            lose();
        } else {
            roundStatus.innerHTML = playerChoice + " equals " + machineChoice + ". You tied!";
            draw();
        }
    }
}

function game(playerChoice) {
    if (!(victoryMessage.innerHTML == "")) {
        victoryMessage.innerHTML = "";
        playerScore.innerHTML = "0";
        machineScore.innerHTML = "0";
        i = 0;
        j = 0;
    }
    machineChoice = machineSelection();
    singleRound(playerChoice, machineChoice);
    if (playerScore.innerHTML == "5" || machineScore.innerHTML == "5") {
        playerScore.innerHTML == "5" ? victoryMessage.innerHTML = "Congratulations, you won!" : victoryMessage.innerHTML = "You lost, better luck next time!";
    }
}
