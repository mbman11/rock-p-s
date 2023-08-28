let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let randomNum = Math.random() * 100;
let userInput = prompt('Type: rock, paper, or scissors.');


function getUserInput() {
  if(userInput == ""){
    alert('please type either: "rock", "paper", or "scissors"');
  }
  else {
    console.log(`You chose: ${userInput}`)
    compChose();
  }
};

function compChose() {
  if(randomNum <= 33.33) {
    randomNum = rock;
    console.log('computer chose: ' + randomNum);
  }
  if(randomNum >= 33.34 && randomNum <= 66.64) {
    randomNum = paper;
    console.log('computer chose: ' + randomNum);
  }
   if (randomNum > 66.65) {
    randomNum = scissors;
    console.log('computer chose: ' + randomNum);
  } if (userInput === randomNum){
    console.log('tie');
  }
};

getUserInput()
