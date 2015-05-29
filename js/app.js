
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



	// Secret number
	
