
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
      // note: review purpose of preventDefault();
      event.preventDefault();
      guess();
    })

});

function guess() {
  var guess = $("userGuess").val();
    // note: review isValidGuess
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



	// Secret number
	
