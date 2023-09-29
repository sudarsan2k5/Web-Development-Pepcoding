const startGameBtn = document.getElementById("start-game-btn");


const ROCK = 'ROCK';
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER WIN! 🎉'
const RESULT_COMPUTER_WIN = 'COMPUTER WIN 😁'

let gameRunning = false;


const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
    ) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you 😁`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    }else if (randomValue < 0.67){
        return PAPER;
    }else {
        return SCISSORS;
    }
}

const getWinner = function(cChoice, pChoice){
    if(cChoice === pChoice){
        return RESULT_DRAW;
    }else if(
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ){
        return RESULT_PLAYER_WIN;
    }else {
        return RESULT_COMPUTER_WIN;
    }
}

startGameBtn.addEventListener('click', function () {
    if(gameRunning){
        return;
    }
  gameRunning = true;
  console.log("Game is Starting...");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(getComputerChoice, getPlayerChoice);
  console.log(winner);
});
