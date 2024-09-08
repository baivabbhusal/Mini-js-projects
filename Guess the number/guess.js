const randomNumber=parseInt(Math.random()*100+1);
console.log(randomNumber);
//select submit button
const submit=document.querySelector("#subt"); 

//Takes user input
const userInput=document.querySelector("#guessField");

//select previous guess
const guessSlot=document.querySelector(".guesses");

//selects remaining guess
const remainingGuess=document.querySelector(".lastResult");

//Display message at end
const lowHigh=document.querySelector(".lowOrHigh");

const startOver=document.querySelector(".resultParas")

const p=document.createElement("p");

let prevGuess=[];
let numGuess=1;
let playGame=true;


if(playGame){
submit.addEventListener("click",function(e)
{
     e.preventDefault();
     const guess=parseInt(userInput.value);
     validateGuess(guess);

});
}

function validateGuess(guess)
{
if (guess>100 || guess<0)
{
  alert("Please enter a number in range 1 to 100.");
}
else{
      prevGuess.push(guess);
      console.log(prevGuess);
      if(numGuess===11)
     {
          displayGuess(guess);
          displayMessage(`Game over.Random Number is ${randomNumber}`);
      endGame();
      }
  else{
     displayGuess(guess);
       checkGuess(guess);
     } 
    }
}


   function checkGuess(guess)
    {

       if(guess===randomNumber){
           displayMessage("Congratulation!,You guessed it right.");
          endGame();
       }
       else if(guess<randomNumber){
           displayMessage("Guess is too low.")
       }
      else if(guess>randomNumber){
           displayMessage("Guess is too high.")

       }
   }

  function displayGuess(guess)
  {
  userInput.value="";
  guessSlot.innerHTML+=`${guess} `;
   numGuess++;
  remainingGuess.innerHTML=`${11-numGuess}`;

  }

function displayMessage(Message)
{
lowHigh.innerHTML=`<h2>${Message}</h2>`;
}


  function endGame(){
     userInput='';
     userInput.setAttribute("disabled",'');
     p.classList.add("button");
     p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
     startOver.append(p);
     playGame=false;
     newGame();
  }

  function newGame(){
   const newGameButton=document.querySelector(".newGame");
   newGameButton.addEventListener('click',function(e){
      randomNumber=parseInt(Math.random()*100+1);
      guessSlot.innerHTML="";
      remainingGuess.innerHTML=`${11-numGuess}`;

        prevGuess=[];
        numGuess=1;


        playGame=true;

   })

  }
