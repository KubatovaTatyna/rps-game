//get elements from HTML;
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let result = document.querySelector('.result');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

//RCP cards object list
cardList = {
  p: paper,
  r: rock,
  s: scissors
};

function startGame() {
  for (let i in cardList) {
    //Put player's and computer's cards
    cardList[i].addEventListener('click', () => {
      //Player
      player.innerHTML = cardList[i].innerHTML;

      //Computer
      setTimeout(() => {
        computer.innerHTML = '';
        let randomCard = Math.floor(Math.random() * 3);
        computer.innerHTML = Object.values(cardList)[randomCard].innerHTML;

        //check win
        winCombines();
      }, 1500);
    });
  }

}

//Win function
function winCombines() {
  let playerCounter = 0;
  let computerCounter = 0;
  if (player.innerHTML == computer.innerHTML) {
    result.innerHTML = 'Toe';
    result.className = 'openResult';
    playerCounter;
    computerCounter;
  }
  else if (player.innerHTML == cardList.r.innerHTML) {
    if (computer.innerHTML == cardList.p.innerHTML) {
      result.innerHTML = 'Computer Won';
      result.className = 'openResult';
      computerCounter++;
    }
    else {
      result.innerHTML = 'Player Won';
      result.className = 'openResult';
      playerCounter++;
    }
  }
  else if (player.innerHTML == cardList.s.innerHTML) {
    if (computer.innerHTML == cardList.r.innerHTML) {
      result.innerHTML = 'Computer Won';
      result.className = 'openResult';
      computerCounter++;
    }
    else {
      result.innerHTML = 'Player Won';
      result.className = 'openResult';
      playerCounter++;
    }
  }
  else if (player.innerHTML == cardList.p.innerHTML) {
    if (computer.innerHTML == cardList.s.innerHTML) {
      result.innerHTML = 'Computer Won';
      result.className = 'openResult';
      computerCounter++;
    }
    else {
      result.innerHTML = 'Player Won';
      result.className = 'openResult';
      playerCounter++;
    }
  }
  console.log(playerCounter);
  console.log(computerCounter)
}
startGame();
