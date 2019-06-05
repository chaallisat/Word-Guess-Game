/*
start game (run js code)
start word bank (do not show word bank)
computer choose a word from word bank
display each character as '_'
    --for loop
    --document.write("_")
user press letter key
    --onkeypress
    --set in array
    --display wrong key
if right, reveal letters
if wrong, user lose a guess and show letter guessed
    --use counter-- to decrease guess 
    --guess number starts at 12 counter = 12
    --can't re-guess the same letters
if user guess all correct letters, display win and correct word
    --alert "You guessed it!"
    --win ++
if user runs out of guesses, display loss
    --alert "You ran out of guesses." + "Better luck next time!"
    --loss ++
coputer choose another word - regardless of win/loss
count wins and loss

*/

const bank = ['apple', 'princess', 'charming'];
let wrong = [];
let guess = 10;
let win = 0;
let loss = 0;

function random_word(bank)
{
  
return bank[Math.floor(Math.random()*bank.length)];

     
}



for(let i = 0; i < random_word(bank).length; i++) {
    document.write("_ ");
    if (onkeypress == random_word(bank[i])) {
        
    }
    else {
        document.wrinte(onkeypress === wrong);
    }
}








/*textForm.addEventListener('submit', function(event) {
    event.preventDefault();

})*/
