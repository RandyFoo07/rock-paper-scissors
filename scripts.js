//html
//<i class="fas fa-hand-rock"></i> 
//<i class="fas fa-hand-scissors"></i>
//<i class="fas fa-hand-paper"></i>
//<i class="fas fa-fire"></i>
//<i class="fas fa-tint"></i>
//<i class="fas fa-leaf"></i>
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

    //console.log(`It's a Draw! Both of you chose ${cChoice}`);
    //console.log(`You Win! ${pChoice} beats ${cChoice}`);
    //console.log(`You Lose! ${cChoice} beats ${pChoice}`);
