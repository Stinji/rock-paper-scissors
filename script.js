const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const res = document.querySelector('.recent-results')
let i = 1;

rock.addEventListener('click', () => {
    game('rock');
})
paper.addEventListener('click', () => {
    game('paper');
})
scissors.addEventListener('click', () => {
    game('scissors');
})

function calculateComputerChoice() {
    const computerArray = ['rock', 'paper', 'scissors'];
    return computerArray[Math.floor(Math.random() * 3)];
}

function changeChoice(userChoice, computerChoice) {
    document.getElementById('user-choice').src = `images/${userChoice}-main.png`;
    document.getElementById('computer-choice').src = `images/${computerChoice}-main.png`;
}

function playRound(userChoice, computerChoice) {
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            return 'win';
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            return 'loss';
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            return 'tie';
    }
}

function createResults(userChoice, computerChoice, result) {
    const div = document.createElement('div');
    const imgUser = document.createElement('img');
    const imgComputer = document.createElement('img');
    const para = document.createElement('p');

    imgUser.classList.add('recent-results-img');
    imgUser.src = `images/${userChoice}-main.png`;
    if (result === 'win') imgUser.classList.add('winner');
    para.textContent = `${i++}`;
    imgComputer.classList.add('recent-results-img');
    imgComputer.src = `images/${computerChoice}-main.png`;
    if (result === 'loss') imgComputer.classList.add('winner');

    if (res.childNodes[4]) {
        res.removeChild(res.lastChild);
    }

    div.classList.add('recent-results-div');
    if (result === 'tie') div.classList.add('boring');
    div.appendChild(imgUser);
    div.appendChild(para);
    div.appendChild(imgComputer);
    res.insertBefore(div, res.childNodes[0]);
}

function addScore(result) {
    const updateScore = document.getElementById(result);
    updateScore.textContent = parseInt(updateScore.textContent) + 1;
    if (parseInt(updateScore.textContent) === 5 && result !== 'tie') victoryMessage(result);
}

function game(userChoice) {
    computerChoice = calculateComputerChoice();
    changeChoice(userChoice, computerChoice);
    result = playRound(userChoice, computerChoice);
    createResults(userChoice, computerChoice, result);
    addScore(result);
}


