//generate random number
let random= Math.floor(Math.random()*100+1)
// console.log(random);

const submit = document.getElementById('subt')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if(playGame){
submit.addEventListener('click',(e) =>
{
    e.preventDefault();
    const Guess = parseInt(userInput.value)
    // console.log(Guess);
    validateGuess(Guess);
})
}

function validateGuess(guess)
{
   if(isNaN(guess))
    alert(`please enter a valod number`)
    else if(guess < 1)
        alert(`please enter a number more than 1`)
    else if(guess > 100)
        alert(`please enter a number less than 100`)
    else{
        prevGuess.push(guess);
        if(numGuess > 10)
        {
            displayGuess(guess)
            displayMessage(`game Over , Random number was ${random}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(random === guess){
        displayMessage(`you guessed it right`)
        endGame()
    }else if(random < guess)
    {
        displayMessage(`you guessed too higher number`)

    }else{
        displayMessage(`you guessed too low number`)

    }

}

function displayGuess(guess)
{
    userInput.value = ''
    guessSlot.innerText += `  ${guess} `
    numGuess++;
    remaining.innerText = `${11 -numGuess}`
}

function displayMessage(message)
{
    lowOrHi.innerText = ` ${message} `
}

function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame"> start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame()
{
   const newgameButton = document.querySelector('#newgame')

   newgameButton.addEventListener('click' ,(e) => {

    random= Math.floor(Math.random()*100+1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerText = ''
    remaining.innerText = `${11 -numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame =true


   })

}