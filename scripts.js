const buttons = Array.from(document.querySelectorAll('.box-left button'));
const compButtonF = document.querySelector('.box-right button.computer-fire');
const compButtonW = document.querySelector('.box-right button.computer-water');
const compButtonG = document.querySelector('.box-right button.computer-grass');
const buttonReplay = document.querySelector('.button-replay button');
const overallResult = document.querySelector('.result-text h1');
const roundNum = document.querySelector('.result-text h2');
const boxResult = document.querySelector('.result-text h3');
const playerHP = document.querySelector('#player-health');
const computerHP = document.querySelector('#computer-health');
const playerC = document.querySelector('.player-button-choice button');
const computerC = document.querySelector('.computer-button-choice button');

buttons.forEach(button => button.addEventListener('click', playGame));
buttonReplay.addEventListener('click', replayGame);

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

    resetSelection();

    if (computerC.className != '') {
        computerC.className = '';
    }

    if (playerC.className !== '') {
        playerC.className = '';
    }

    if (compC === 'Fire') {
        setNewButtonFire(computerC);
        setButtonHoverFire(compButtonF);
        computerChoice = 'Fire';
    } else if (compC === 'Water') {
        setNewButtonWater(computerC);
        setButtonHoverWater(compButtonW);
        computerChoice = 'Water';
    } else if (compC === 'Grass') {
        setNewButtonGrass(computerC);
        setButtonHoverGrass(compButtonG);
        computerChoice = 'Grass';
    }

    if (className === 'player-fire fas fa-fire fa-3x') {
        setNewButtonFire(playerC);
        playerChoice = 'Fire';
    } else if (className === 'player-water fas fa-tint fa-3x') {
        setNewButtonWater(playerC);
        playerChoice = 'Water';
    } else if (className === 'player-grass fas fa-leaf fa-3x') {
        setNewButtonGrass(playerC);
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

    if (computerHP.value === 0) {
        overallResult.textContent = 'You Won!';
    }
    if (playerHP.value === 0) {
        overallResult.textContent = 'You Lost!';
    }
}

function playRound() {
    roundNum.textContent = `Round ${round}`;

    if (computerChoice === 'Fire') {
        switch (playerChoice) {
            case 'Fire':
                showDrawResult(boxResult);
                break;
            case 'Water':
                showWinResult(boxResult);
                damageHP(computerHP, 20);
                break;
            case 'Grass':
                showLoseResult(boxResult);
                damageHP(playerHP, 20);
                break;
        }
    } else if (computerChoice === 'Water') {
        switch (playerChoice) {
            case 'Water':
                showDrawResult(boxResult);
                break;
            case 'Grass':
                showWinResult(boxResult);
                damageHP(computerHP, 20);
                break;
            case 'Fire':
                showLoseResult(boxResult);
                damageHP(playerHP, 20);
                break;
        }
    } else if (computerChoice === 'Grass') {
        switch (playerChoice) {
            case 'Grass':
                showDrawResult(boxResult);
                break;
            case 'Fire':
                showWinResult(boxResult);
                damageHP(computerHP, 20);
                break;
            case 'Water':
                showLoseResult(boxResult);
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
    boxResult.textContent = '';
    overallResult.textContent = '';
    roundNum.textContent = '';
    playerHP.value = 100;
    computerHP.value = 100;

    resetSelection();

}

function damageHP(HP, damage) {
    HP.value -= damage;
    return HP;
}

function resetSelection() {
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

function setNewButtonFire(button) {
    button.className = 'computer-fire fas fa-fire fa-3x';
    button.style.backgroundImage = 'radial-gradient(rgb(255, 144, 39), rgb(255, 61, 61))';
    button.style.boxShadow = '0px 0px 10px 10px rgb(255, 74, 19)';
}

function setNewButtonWater(button) {
    button.className = 'computer-water fas fa-tint fa-3x';
    button.style.backgroundImage = 'radial-gradient(rgb(159, 236, 255), rgb(60, 216, 255), rgb(57, 149, 255))';
    button.style.boxShadow = '0px 0px 10px 10px  rgb(86, 165, 255)';
}

function setNewButtonGrass(button) {
    button.className = 'computer-grass fas fa-leaf fa-3x';
    button.style.backgroundImage = 'radial-gradient(rgb(158, 238, 158), rgb(118, 224, 145), rgb(56, 219, 41))';
    button.style.boxShadow = '0px 0px 10px 10px rgb(47, 212, 32)';
}

function setButtonHoverFire(button) {
    button.style.backgroundImage = 'radial-gradient(rgb(255, 197, 88), rgb(255, 110, 110))';
    button.style.boxShadow = '0px 0px 10px 10px rgb(255, 122, 61)';
}

function setButtonHoverWater(button) {
    button.style.backgroundImage = 'radial-gradient(rgb(199, 244, 255), rgb(125, 229, 255))';
    button.style.boxShadow = '0px 0px 10px 10px rgb(83, 218, 252)';
}

function setButtonHoverGrass(button) {
    button.style.backgroundImage = 'radial-gradient(rgb(234, 245, 234), rgb(152, 228, 171), rgb(148, 238, 139))';
    button.style.boxShadow = '0px 0px 10px 10px rgb(90, 240, 76)';
}

function showDrawResult(output) {
    output.textContent = `It's a Draw! Both of you chose ${playerChoice}`;
    round++;
}

function showWinResult(output) {
    output.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    round++;
}

function showLoseResult(output) {
    output.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    round++;
}