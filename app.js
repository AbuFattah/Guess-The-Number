/* 
  GAME RULES:
  The user is required to guess a number between min and max.
  If user guess match with the winning number --> show win msg.
  The player will have a certain amout of guesses.
  Show remaining guesses to player.
  If guess left becomes ZERO, show lose msg with winning number.
  Let the player choose to play again after the game is over.
*/
// Game values
let minVal = 1,
    maxVal = 10,
    winningNum = getRandomInt(1,10),
    guessesLeft = 3,
    blue = '#11b4f5';

//UI Elements
const gameForm = document.querySelector('#game-form'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      msg = document.querySelector('#msg');



// Adding ui min and max
minNum.textContent = minVal;
maxNum.textContent = maxVal;

//adding event listeners

gameForm.addEventListener('submit',function(e){
  let guess = parseInt(guessInput.value);
  
  //validation
  if(isNaN(guess) || guess<minVal || guess > maxVal){
    
    setMsg(`Please enter a number between ${minVal} and ${maxVal}`,'red' );
  }
  else{
      //Win case
  if(guess === winningNum){
  /*   guessInput.disabled = true;
    
    guessInput.classList.add('border-success');
    guessBtn.classList.add('border-success');
    setMsg(`YOU WIN, ${winningNum} is correct!`,'green');
    // changing value to Play again
    guessBtn.value = 'Play Again'
    // reload function after game over
    guessBtn.addEventListener('click',function(){
      window.location.reload('Refresh');
    }); */
    gameOver(true,`YOU WIN, ${winningNum} is correct!`);
  }
  else{
    guessesLeft -=1;
    console.log(guessesLeft);
    setMsg(`You have ${guessesLeft} guesses left.`,blue);
    
    //LOSE CASE
    if(guessesLeft === 0){
     /*  guessInput.disabled = true;
      guessInput.classList.add('border-danger');
      guessBtn.classList.add('border-danger');
      setMsg(`It was ${winningNum}, You lost!!`,'red');
      guessBtn.value = 'Play Again'
      guessBtn.addEventListener('click',function(){
        window.location.reload('Refresh');
      }); */

      gameOver(false,`It was ${winningNum}, You lost!!`);
    }
  }
  }

  e.preventDefault();
});


function setMsg(message,color){
  msg.textContent = message;
  msg.style.color = color;
}

// Random Integer generator function

function getRandomInt(min,max){
  return Math.floor(Math.random()*(max-min+1)) + min;
}


// Game over function
function gameOver(hasWon,message){
  guessInput.disabled = true;
  /* guessInput.borderColor = 'green'; */
  let color;
  if(hasWon === true){
    guessInput.classList.add('border-success');
    guessBtn.classList.add('border-success');
    color = 'green';
    setMsg(message,color);
  }
  else{
    guessInput.classList.add('border-danger');
    guessBtn.classList.add('border-danger');
    color = 'red';
    setMsg(message,color);
  }
  
  // changing value to Play again
  guessBtn.value = 'Play Again'
  // reload function after game over
  guessBtn.addEventListener('click',function(){
    window.location.reload('Refresh');
  });

}