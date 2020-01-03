const buttons = Array.from(document.querySelectorAll('.lhs button'));
const compButtonF = document.querySelector('.rhs button.computerF');
const compButtonW = document.querySelector('.rhs button.computerW');
const compButtonG = document.querySelector('.rhs button.computerG');
const replayBtn = document.querySelector('.replayBtn button');
const overallResult = document.querySelector('.result h1');
const roundNum = document.querySelector('.result h2');
const resultScreen = document.querySelector('.result h3');
const playerHP = document.querySelector('#pHpBar');
const computerHP = document.querySelector('#cHpBar');
const playerC = document.querySelector('.playerChoice button');
const computerC = document.querySelector('.computerChoice button');

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
    let compC;
    compC = computerPlay();

    computerC.style.backgroundImage = '';
    computerC.style.boxShadow = '';
    playerC.style.backgroundImage = '';
    playerC.style.boxShadow = '';
    compButtonF.style.backgroundImage = 'radial-gradient(orange, rgb(255, 68, 68), rgb(255, 0, 0))';
    compButtonF.style.boxShadow = '';
    compButtonW.style.backgroundImage = 'radial-gradient(rgb(154, 233, 253), rgb(22, 208, 255), rgb(0, 119, 255))';
    compButtonW.style.boxShadow = '';
    compButtonG.style.backgroundImage = 'radial-gradient(rgb(190, 241, 190), rgb(78, 219, 113), rgb(20, 238, 0))';
    compButtonG.style.boxShadow = '';


    if (computerC.className != '') {
        computerC.className = '';
    }

    if (playerC.className !== '') {
        playerC.className = '';
    }

    if (compC === 'Fire') {
        computerC.className = 'computerF fas fa-fire fa-3x';
        computerC.style.backgroundImage = 'radial-gradient(rgb(255, 144, 39), rgb(255, 61, 61))';
        computerC.style.boxShadow = '0px 0px 10px 10px rgb(255, 74, 19)';
        compButtonF.style.backgroundImage = 'radial-gradient(rgb(255, 197, 88), rgb(255, 110, 110))';
        compButtonF.style.boxShadow = '0px 0px 10px 10px rgb(255, 122, 61)';
        computerChoice = 'Fire';
    } else if (compC === 'Water') {
        computerC.className = 'computerW fas fa-tint fa-3x';
        computerC.style.backgroundImage = 'radial-gradient(rgb(159, 236, 255), rgb(60, 216, 255), rgb(57, 149, 255))';
        computerC.style.boxShadow = '0px 0px 10px 10px  rgb(86, 165, 255)';
        compButtonW.style.backgroundImage = 'radial-gradient(rgb(199, 244, 255), rgb(125, 229, 255))';
        compButtonW.style.boxShadow = '0px 0px 10px 10px rgb(83, 218, 252)';
        computerChoice = 'Water';
    } else if (compC === 'Grass') {
        computerC.className = 'computerG fas fa-leaf fa-3x';
        computerC.style.backgroundImage = 'radial-gradient(rgb(158, 238, 158), rgb(118, 224, 145), rgb(56, 219, 41))';
        computerC.style.boxShadow = '0px 0px 10px 10px rgb(47, 212, 32)';
        compButtonG.style.backgroundImage = 'radial-gradient(rgb(234, 245, 234), rgb(152, 228, 171), rgb(148, 238, 139))';
        compButtonG.style.boxShadow = '0px 0px 10px 10px rgb(90, 240, 76)';
        computerChoice = 'Grass';
    }

    if (className === 'playerF fas fa-fire fa-3x') {
        playerC.style.backgroundImage = 'radial-gradient(rgb(255, 144, 39), rgb(255, 61, 61))';
        playerC.style.boxShadow = '0px 0px 10px 10px rgb(255, 74, 19)';
        playerChoice = 'Fire';
    } else if (className === 'playerW fas fa-tint fa-3x') {
        playerC.style.backgroundImage = 'radial-gradient(rgb(159, 236, 255), rgb(60, 216, 255), rgb(57, 149, 255))';
        playerC.style.boxShadow = '0px 0px 10px 10px  rgb(86, 165, 255)';
        playerChoice = 'Water';
    } else if (className === 'playerG fas fa-leaf fa-3x') {
        playerC.style.backgroundImage = 'radial-gradient(rgb(158, 238, 158), rgb(118, 224, 145), rgb(56, 219, 41))';
        playerC.style.boxShadow = '0px 0px 10px 10px rgb(47, 212, 32)';
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
        overallResult.textContent = 'Congrats! You Won the Game!';
    }
    if (playerHP.value === 0) {
        overallResult.textContent = 'Too Bad! You Lost the Game!';
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
    computerC.className = '';
    playerC.className = '';
    round = 1;
    resultScreen.textContent = '';
    overallResult.textContent = '';
    roundNum.textContent = '';
    playerHP.value = 100;
    computerHP.value = 100;
    computerC.style.backgroundImage = '';
    computerC.style.boxShadow = '';
    playerC.style.backgroundImage = '';
    playerC.style.boxShadow = '';
    compButtonF.style.backgroundImage = 'radial-gradient(orange, rgb(255, 68, 68), rgb(255, 0, 0))';
    compButtonF.style.boxShadow = '';
    compButtonW.style.backgroundImage = 'radial-gradient(rgb(154, 233, 253), rgb(22, 208, 255), rgb(0, 119, 255))';
    compButtonW.style.boxShadow = '';
    compButtonG.style.backgroundImage = 'radial-gradient(rgb(190, 241, 190), rgb(78, 219, 113), rgb(20, 238, 0))';
    compButtonG.style.boxShadow = '';
}

function damageHP(HP, damage) {
    HP.value -= damage;
    // if (HP.value <= 50) {
    //     HP[value].style.backgroundColor = 'rgb(255, 145, 0)';
    // }
    return HP;

}



//replay button
