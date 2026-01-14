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
    intervalId = setInterval(function() {
    const playMove = pickComputerMove();
    pickPlayerMove(playMove);
  },1000);
  isAutoPlaying = true;

  }else{
    clearInterval(intervalId);
    isAutoPlaying = false;

  }

}


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
