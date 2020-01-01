//html
//<i class="fas fa-hand-rock"></i> 
//<i class="fas fa-hand-scissors"></i>
//<i class="fas fa-hand-paper"></i>
//<i class="fas fa-fire"></i>
//<i class="fas fa-tint"></i>
//<i class="fas fa-leaf"></i>

/*
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors']
    return choice[getRandomInt(3)]
}

//let playerSelection = () => prompt('Rock, Paper or Scissors?');
let computerSelection = () => computerPlay();

function playRound(playerSelection, computerSelection) {

    if (computerSelection.toUpperCase() === 'ROCK') {
        switch (playerSelection.toUpperCase()) {
            case 'SCISSORS':
                return -1;
            case 'ROCK':
                return 0;
            case 'PAPER':
                return 1;
            default:
                break;
        }
    }
    if (computerSelection.toUpperCase() === 'PAPER') {
        switch (playerSelection.toUpperCase()) {
            case 'SCISSORS':
                return 1;
            case 'ROCK':
                return -1;
            case 'PAPER':
                return 0;
            default:
                break;
        }
    }
    if (computerSelection.toUpperCase() === 'SCISSORS') {
        switch (playerSelection.toUpperCase()) {
            case 'SCISSORS':
                return 0;
            case 'ROCK':
                return 1;
            case 'PAPER':
                return -1;
            default:
                break;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let pChoice = playerSelection();
    let cChoice = computerSelection();
    const result = playRound(pChoice, cChoice);
    if (result === 0) {
        console.log(`It's a Draw! Both of you chose ${cChoice}`);
    }
    else if (result === 1) {
        playerScore++;
        console.log(`You Win! ${pChoice} beats ${cChoice}`);
    } else if (result === -1) {
        computerScore++;
        console.log(`You Lose! ${cChoice} beats ${pChoice}`);
    } else {
        console.log('Invalid input!')
    }

    if (playerScore === 5) {
        console.log('You Won the Game!');
    } else if (computerScore === 5) {
        console.log('You Lost the Game!');
    }
}
console.log(game());
*/


const buttons = Array.from(document.querySelectorAll('.lhs button'));
buttons.forEach(button => button.addEventListener('click', playGame));

let computerChoice = '';
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;
let round = 1;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
    const choice = ['Fire', 'Water', 'Grass'];
    return choice[getRandomInt(3)];
}

function selectChoice(e) {
    const className = e.target.className;
    const playerC = document.querySelector('.playerChoice button');
    const computerC = document.querySelector('.computerChoice button');
    let compC;
    compC = computerPlay();

    if (computerC.className != '') {
        computerC.className = '';
    }

    if (playerC.className !== '') {
        playerC.className = '';
    }

    if (compC === 'Fire') {
        computerC.className = 'computerF fas fa-fire fa-3x';
        computerChoice = 'Fire';
    } else if (compC === 'Water') {
        computerC.className = 'computerW fas fa-tint fa-3x';
        computerChoice = 'Water';
    } else if (compC === 'Grass') {
        computerC.className = 'computerG fas fa-leaf fa-3x';
        computerChoice = 'Grass';
    }

    if (className === 'playerF fas fa-fire fa-3x') {
        playerChoice = 'Fire';
    } else if (className === 'playerW fas fa-tint fa-3x') {
        playerChoice = 'Water';
    } else if (className === 'playerG fas fa-leaf fa-3x') {
        playerChoice = 'Grass';
    }

    console.log(playerChoice);
    console.log(computerChoice);

    playerC.className = className;
}

function playGame(e) {
    if (round >= 6) {
        return;
    }

    selectChoice(e);

    const roundNum = document.querySelector('.result h2');

    if (round < 5) {
        roundNum.textContent = `Round ${round}`;
    } else if (round === 5) {
        roundNum.textContent = 'Final Round';
    }

    const resultScreen = document.querySelector('.result h3');
    const overallResult = document.querySelector('.result h1');


    if (round <= 5) {
        if (computerChoice === 'Fire') {
            switch (playerChoice) {
                case 'Fire':
                    resultScreen.textContent = `It's a Draw! Both of you chose ${playerChoice}`;
                    round++;
                    break;
                case 'Water':
                    resultScreen.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
                    round++;
                    playerScore++;
                    break;
                case 'Grass':
                    resultScreen.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
                    round++;
                    computerScore++;
                    break;
            }
        } else if (computerChoice === 'Water') {
            switch (playerChoice) {
                case 'Water':
                    resultScreen.textContent = `It's a Draw! Both of you chose ${playerChoice}`;
                    round++;
                    break;
                case 'Grass':
                    resultScreen.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
                    round++;
                    playerScore++;
                    break;
                case 'Fire':
                    resultScreen.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
                    round++;
                    computerScore++;
                    break;
            }
        } else if (computerChoice === 'Grass') {
            switch (playerChoice) {
                case 'Grass':
                    resultScreen.textContent = `It's a Draw! Both of you chose ${playerChoice}`;
                    round++;
                    break;
                case 'Fire':
                    resultScreen.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
                    round++;
                    playerScore++;
                    break;
                case 'Water':
                    resultScreen.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
                    round++;
                    computerScore++;
                    break;
            }
        }
    }
    if (round === 6) {
        if (playerScore > computerScore) {
            overallResult.textContent = 'Congratulations! You Won the Game!';
        } else if (computerScore > playerScore) {
            overallResult.textContent = 'Too Bad! You Lost the Game!';
        } else {
            overallResult.textContent = 'The Game ended in a Draw!';
        }
    }

}
    //console.log(`It's a Draw! Both of you chose ${cChoice}`);
    //console.log(`You Win! ${pChoice} beats ${cChoice}`);
    //console.log(`You Lose! ${cChoice} beats ${pChoice}`);
