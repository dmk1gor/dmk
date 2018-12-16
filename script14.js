

// jQuery function waits for page load as did window.onload()- jQuery functions faster
// Also jQuery can replaced by a $ alone !!! see below 

// jQuery(document).ready(function() {
//	start up code goes here
 // alert("this works!");
// });
////////////////////////////////////////////////////////
/*
$(document).ready(function() {
  // start up code goes here
 alert("this works!");
});

*/
// j Query function calls w/o ready 
$(function(){
	
	/*
// start up code goes here
 alert("this works 1!");
});

	*/
	
	
	//  j Query to work with DOM objects samples   /////////////////////////////////
	// $ j Query # is ID text is value to assign 
	// $("#title").text("More Money Please ! at Title Object "); /////////////////
	
	// $("#title").text("More Money Please ! at Title Object ");

	// $("#first").html("<h2>MONEY 40 Ball</h2>");
	
	
	$("#first").prepend("<h2>MORE MORE $$$$</h2>");
	$("#first").append("<h3>.......NOW NOW ....</h3>");
	
	//$("#myAnchor").attr("href", "http://channel9.msdn.com");

	
	 $("#title").addClass("standout");
	
});





/*


  //$("#title").text("Yay, I can now get at the H1 immediately!");

  //$("#first").html("<h2>Great quotes</h2>");

  // append and prepend work INSIDE the given selection
  $("#first").prepend("<h2>Great quotes</h2>");
  $("#first").append("<h3>... for your to ponder ... </h3>");

  // before, after, insertBefore, insertAfter work OUTSIDE
  // the given selection.

  //$("#myAnchor").attr("href", "http://channel9.msdn.com");

  $("#title").addClass("standout");

});


*/














