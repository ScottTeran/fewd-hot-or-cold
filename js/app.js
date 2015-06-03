
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

function guess() {
    // I'm gonn
  var guess = $("userGuess").val();
    // 
    if (!isValidGuess(guess)){
      // note to self: what is the point of userGuess?
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



	// secret number
  function secretNum (){
    return Math.floor((Math.random() * 100) + 1);
  }
	
