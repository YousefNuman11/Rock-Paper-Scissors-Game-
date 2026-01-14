let score = JSON.parse(localStorage.getItem("score"));
JSON.parse(localStorage.getItem("score"));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

updateRes();

let result = "";

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() =>  {
    const playMove = pickComputerMove();
    pickPlayerMove(playMove);
  },1000);
  isAutoPlaying = true;

  }else{
    clearInterval(intervalId);
    isAutoPlaying = false;

  }

}

const rockButton = document.querySelector('.js-rock-button');
const paperButton = document.querySelector('.js-paper-button');
const scissorsButton = document.querySelector('.js-scissors-button');
const resetButton = document.querySelector('.js-reset-button');
const autoButton = document.querySelector('.js-auto-button');

rockButton.addEventListener('click', () => {
  pickPlayerMove('rock');
});

paperButton.addEventListener('click', () => {
  pickPlayerMove('paper');
});

scissorsButton.addEventListener('click', () => {
  pickPlayerMove('scissors');
});

resetButton.addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateRes();
});


autoButton.addEventListener('click', () => {
  autoPlay();
});



document.body.addEventListener('keydown', (event) => {

  if(event.key === 'r' || event.key === 'R'){
    pickPlayerMove('rock');
  }else  if(event.key === 'p' || event.key === 'P'){
    pickPlayerMove('paper');
  }else if (event.key === 's' || event.key === 'S'){
    pickPlayerMove('scissors');}
  });




function updateResult() {
  document.querySelector(".js-result").innerHTML = `${result}`;
}

function updateMoves() {
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You ${playerMove} - ${computerMove} Computer`;
}

function updateRes() {
  document.querySelector(
    ".res"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
function pickPlayerMove(playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You Win.";
    }

    if (result === "You Win.") {
      score.wins += 1;
    } else if (result === "You lose.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }

    updateRes();
    updateResult();
    document.querySelector(".js-moves").innerHTML = `      You 
      <img class="move-image" src="./Img/${playerMove}-emoji.png">
      <img class="move-image" src="./Img/${computerMove}-emoji.png">
      Computer`;
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
    if (result === "You Win.") {
      score.wins += 1;
    } else if (result === "You lose.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }

    updateRes();
    updateResult();
    document.querySelector(".js-moves").innerHTML = `      You 
      <img class="move-image" src="./Img/${playerMove}-emoji.png">
      <img class="move-image" src="./Img/${computerMove}-emoji.png">
      Computer`;
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
    if (result === "You Win.") {
      score.wins += 1;
    } else if (result === "You lose.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateRes();
    updateResult();
    document.querySelector(".js-moves").innerHTML = `      You 
      <img class="move-image" src="./Img/${playerMove}-emoji.png">
      <img class="move-image" src="./Img/${computerMove}-emoji.png">
      Computer`;
  }
}
