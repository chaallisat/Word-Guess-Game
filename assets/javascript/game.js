//start game (run js code)

$(document).ready(function() {
    
//start word bank (do not show word bank)
const bank = ['apple', 'princess', 'charming'];
let all = []
let wrong = [];
let guess = 12;
let win = 0;
let loss = 0;

//computer choose a word from word bank
const idk = {
random_word: function random_word(bank)
{
    console.log(random_word(bank))
  
return bank[Math.floor(Math.random()*bank.length)];

     
}
}
//display each character as '_'
//For some reason, the word is not displaying

for(let i = 0; i < idk.length; i++) {
   $("#word").text("_ ");
   $("#word").getElementById("p1").innerHTML = "_ ";
}

//user press letter key

$(document).keypress(function(event){ 
      
    let key = (event.keyCode ? event.keyCode : event.which); 
    let ch=String.fromCharCode(key) 
        console.log(ch);  
        $(key).text($(ch).text());
    all.push(key);
    console.log(all);
//if right, reveal letters
//if wrong, user lose a guess and show letter guessed
    // --can't re-guess the same letters

    if (key == idk) {
    console.log(right);
}
    else {
    wrong.push(key)
    guess--
}    
//if user guess all correct letters, display win and correct word
if (solve = true) {
    alert("You guessed it!")
    win ++ 
}
    
//if user runs out of guesses, display loss
if (solve = false) {
    alert("You ran out of guesses." + "Better luck next time!")
    loss ++ 
}
    




});









/*


coputer choose another word - regardless of win/loss
count wins and loss

*/





//$("#word").prepend("<br><hr>" + wrong);


})


/*textForm.addEventListener('submit', function(event) {
    event.preventDefault();

})*/
