//Ask user for choice
//Generate random computer choice
//Compare user choice vs computer choice
//If user rock and computer rock return 'Draw!'
//or if



let playerWins = 0;
let computerWins = 0;

function playRound() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    playerSelection = prompt('Type rock, paper, or scissors.');
    playerSelectionLower = playerSelection.toLowerCase();
    computerSelection = choice;
    let message
    if (playerSelectionLower == 'rock' && computerSelection == 'paper' || playerSelectionLower == 'scissors' && computerSelection == 'rock' || playerSelectionLower == 'paper' && computerSelection == 'scissors') {
        computerWins++;
        message = `You lose! You picked ${playerSelectionLower} and computer picked ${computerSelection}. \n Your wins = ${playerWins} \n Computer wins =  ${computerWins}`
    } if (playerSelectionLower == 'rock' && computerSelection == 'scissors' || playerSelectionLower == 'scissors' && computerSelection == 'paper' || playerSelectionLower == 'paper' && computerSelection == 'rock') {
        playerWins++;
        message = `You win! You picked ${playerSelectionLower} and the computer picked ${computerSelection}. \n Your wins = ${playerWins} \n Computer wins = ${computerWins}`;
    } else if (playerSelectionLower == 'rock' && computerSelection == 'rock' || playerSelectionLower == 'scissors' && computerSelection == 'scissors' || playerSelectionLower == 'paper' && computerSelection == 'paper') {
        message = `Draw! You picked ${playerSelectionLower} and the computer picked ${computerSelection}. \n Your wins = ${playerWins} \n Computer wins =  ${computerWins}`;
    }
    alert(message);
}
function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}