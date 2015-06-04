
$(document).ready(function(){
	
	  // display information modal box 
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	// hide information modal box 
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// calls a new game
  	$("a.new").click(function(){
  		newGame();
  	});

    $("#guessButton").click(function(){
    // event.preventDefault();
      guess();
    })

});

// NEW GAME
/* When the page loads, JavaScript 
should start a new game. Since you’ll 
need to be able to start a new game 
when the user clicks the “New Game” 
button, you’ll want to create a 
newGame function that does everything 
necessary to start a new game. */

function newGame() {
  // first, run the secret number function and assign the value to secretNum
  secretNum = getSecretNum();
  feedback = "Make Your Guess!";
  


} 

function guess() {
    // I'm gonn
  var guess = $("userGuess").val();
    // 
    if (!isValidGuess(guess)){
      userGuess = "";
      updateDisplay();
      return;
    }

    feedback = getFeedback(guess);
    guessCount++;
    guessList.push(guess);
    userGuess = "";
    updateDisplay();
  }



	// SECRET NUMBER
  /* When a new game starts, a secret 
  number between 1 and 100 should be 
  generated that the user will have to 
  guess. You should write a named 
  function that takes care of this. 
  You should try to start a new game 
  without refreshing or reloading the 
  page. */
  function getSecretNum() {
    return Math.floor((Math.random() * 100) + 1);
  }
	
