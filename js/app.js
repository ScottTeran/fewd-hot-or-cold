
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

// review global variables, callbacks, etc.... 

var secretNumber;
var feedback;
var guessCount;
var guessList;


// NEW GAME

/* When the page loads, JavaScript should start a new game. Since you’ll 
need to be able to start a new game when the user clicks the “New Game” 
button, you’ll want to create a newGame function that does everything 
necessary to start a new game. */

function newGame() {
  secretNum = getSecretNum();
  feedback = "Make Your Guess!";
  guessCount = 0;
  guessList = [];
  updateDisplay(); 
} 


// GUESS FUNCTION

function guess() {
  var guess = $("userGuess").val();
  feedback = getFeedback(guess);
  guessCount++;
  guessList.push(guess);
  userGuess = "";
  updateDisplay();
}


// DISPLAY

  /* The game should track how many guess the user has made. Feedback about this
  should appear in span#count (which defaults to 0, when the page loads). */

function updateDisplay() {
  $("#feedback").text(feedback);
  $("#userGuess").val(userGuess);
  $("#count").text(guessCount);
  $("guessList").empty();

  if (guessList.length > 0) {
    for (var i = 0; i < guessList.length; i++) {
      var listItem = "<li>" + guessList[i] + "</li>";
      $("#guessList").append(listItem);
    }
  }
}


// SECRET NUMBER

  /* When a new game starts, a secret number between 1 and 100 should be 
  generated that the user will have to guess. You should write a named 
  function that takes care of this. You should try to start a new game 
  without refreshing or reloading the page. */
  
  function getSecretNum() {
    return Math.floor((Math.random() * 100) + 1);
  }
	
