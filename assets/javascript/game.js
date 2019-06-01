/*
start game (run js code)
start word bank (do not show word bank)
computer choose a word from word bank
display each character as '_'
user clicks letter
if right, reveal letters
if wrong, user lose a guess and show letter guessed
    --can't re-guess the same letters
if user guess all correct letters, display win and correct word
if user runs out of guesses, display loss
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
