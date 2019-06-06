//start game (run js code)

$(document).ready(function() {
    
//start word bank (do not show word bank)
const bank = ['apple', 'princess', 'charming'];
let wrong = "";
let guess = 12;
let win = 0;
let loss = 0;

//computer choose a word from word bank
$("#word").text(function random_word(bank)
{
  
return bank[Math.floor(Math.random()*bank.length)];

     
})

$(document).keypress(function(event){ 
      
    let key = (event.keyCode ? event.keyCode : event.which); 
    let ch=String.fromCharCode(key) 
        console.log(ch);  
        $("#word").text($(key).text());
        
      
  
});

//display each character as '_'

//for(let i = 0; i < random_word(bank).length; i++) {
  // $("#word").text("_ ");

//}

/*
user press letter key
    --onkeypress
    --set in array
    --display wrong key
if right, reveal letters
if wrong, user lose a guess and show letter guessed
    guess--
    --use counter-- to decrease guess 
    --guess number starts at 12 counter = 12
    --can't re-guess the same letters
if user guess all correct letters, display win and correct word
    --alert("You guessed it!")
    --win ++
if user runs out of guesses, display loss
    --alert("You ran out of guesses." + "Better luck next time!")
    --loss ++
coputer choose another word - regardless of win/loss
count wins and loss

*/





//$("#word").prepend("<br><hr>" + wrong);


})


/*textForm.addEventListener('submit', function(event) {
    event.preventDefault();

})*/
