/*
start game (run js code)
start word bank (do not show word bank)
computer choose a word from word bank
display each character as '_'
user press letter key
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

function random_word(bank)
{
  
return bank[Math.floor(Math.random()*bank.length)];
     
}


console.log(random_word(bank));


/*textForm.addEventListener('submit', function(event) {
    event.preventDefault();

})*/
