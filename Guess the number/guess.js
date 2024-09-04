const randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector("#subt");

const previousGuess=document.querySelector("#guess");
const remainingGuess=document.querySelector("#lastResult");
const lowHigh=document.querySelector("#lowOrHigh");


let prevGuess=[];
let currentGuess=1;
let playGame=true;


if(playGame){
submit.addEventListener("submit",function(e)
{
    e.preventDefault();
    const userInput=document.querySelector("#guessField").value;
    validateGuess(userInput)

});
}

function validateGuess(guess)
{
if (guess>100 && guess<0)
{
    alert("Please enter a number in range 1 to 100.");
}
}

function checkGuess(guess)
{

}

function displayGuess(guess)
{

}

function displayMessage(guess)
{

}
