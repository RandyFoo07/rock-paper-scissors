const buttons = Array.from(document.querySelectorAll('.lhs button'));
const replayBtn = document.querySelector('.replayBtn button');
const overallResult = document.querySelector('.result h1');
const roundNum = document.querySelector('.result h2');
const resultScreen = document.querySelector('.result h3');
const playerHP = document.querySelector('#pHpBar');
const computerHP = document.querySelector('#cHpBar');

buttons.forEach(button => button.addEventListener('click', playGame));
replayBtn.addEventListener('click', replayGame);

let computerChoice = '';
let playerChoice = '';
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

    playerC.className = className;
}


function playGame(e) {
    if (playerHP.value <= 0 || computerHP.value <= 0) {
        return;
    }

    selectChoice(e);

    if (playerHP.value !== 0 && computerHP.value !== 0) {

        playRound();
    }

    console.log(playerHP.value);
    console.log(computerHP.value);


    if (computerHP.value === 0) {
        overallResult.textContent = 'Congratulations! You Won the Game!';
    }
    if (playerHP.value === 0) {
        overallResult.textContent = 'Too Bad! You Lost the Game';
    }
}

function playRound() {
    roundNum.textContent = `Round ${round}`;

    if (computerChoice === 'Fire') {
        switch (playerChoice) {
            case 'Fire':
                resultScreen.textContent = `It's a Draw! Both of you chose ${playerChoice}`;
                round++;
                break;
            case 'Water':
                resultScreen.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
                round++;
                damageHP(computerHP, 20);
                break;
            case 'Grass':
                resultScreen.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
                round++;
                damageHP(playerHP, 20);
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
                damageHP(computerHP, 20);
                break;
            case 'Fire':
                resultScreen.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
                round++;
                damageHP(playerHP, 20);
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
                damageHP(computerHP, 20);
                break;
            case 'Water':
                resultScreen.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
                round++;
                damageHP(playerHP, 20);
                break;
        }
    }
}


function replayGame() {
    computerChoice = '';
    playerChoice = '';
    round = 1;
    resultScreen.textContent = '';
    overallResult.textContent = '';
    roundNum.textContent = '';
    playerHP.value = 100;
    computerHP.value = 100;
}

function damageHP(HP, damage) {
    HP.value -= damage;
    // if (HP.value <= 50) {
    //     HP[value].style.backgroundColor = 'rgb(255, 145, 0)';
    // }
    return HP;

}


//replay button
