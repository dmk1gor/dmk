/*
// Below need to have JS wait till web page load IS complete 
// Before ACTIVATING the Event Script below ************* Can Cause Performance

// Issue with big pics etc... Below 2 ways to Invoke Script 
//  By instance of VAR assign Object or by The Dom [document]
*/


// RECAP upon Web Page Load - the Anoymous function() will fire off
// This will create the attachment of button On Click fire off
// The function "runTheExample"
window.onload = function() {
 // var clickMeButton = document.getElementById('clickMe');
 // clickMeButton.onclick = runTheExample;
  document.getElementById('clickMe').onclick = runTheExample;
}

/*
function runTheExample() {
  alert('running the Base example');
}
*/
// Reference JS to document object button below 
/*
var clickMeButton = document.getElementById('clickMe');
clickMeButton.onclick = runTheExample;

function runTheExample() {
  alert('running the example');
}
*/

function runTheExample() {

/*
  var myElement = document.getElementById('second');
  var myNodeName = myElement.nodeName;    // Dom object ID = second
 // alert(myNodeName);

  if (myElement != null)
  {
    alert(myElement.innerHTML);  // grabs html code ** 
	// Use jquery best practice INSTEAD ****
  }
  
 // below set value of displayed html  ID = second object 
document.getElementById('second').innerHTML = "See how I set the text here?";
  */
  
  /*
  var listOfParagraphs = document.getElementsByTagName('p');
 
 // alert(listOfParagraphs.length);

  var secondParagraph = listOfParagraphs[1];
  
  alert(secondParagraph.innerHTML);

  */
  /*
   myElement = document.getElementById('second');
  alert(myElement.parentNode.nodeName);  // parent node <div> level
  */
  
  myElement = document.getElementById('second');
     // array of children of element
   // alert(myElement.childNodes[0]);  // parent node <div> level
   alert(myElement.nextSibling);
   /*
     myElement.firstChild;
  myElement.lastChild;

  myElement.nextSibling;
  myElement.previousSibling;
  */
}

 
/* 
 

 
  myElement = document.getElementById('second');
  alert(myElement.parentNode.nodeName);
 
  myElement.childNodes[0];  // array of children of elemet 
  myElement.firstChild;
  myElement.lastChild;

  myElement.nextSibling;
  myElement.previousSibling;


 
  var anchor = document.getElementById('myAnchor');
  //var anchorDestination = anchor.href;
  //alert(anchorDestination);

  //anchor.href = "http://www.learnvisualstudio.net";  

  //anchor.setAttribute('href', 'http://www.learnvisualstudio.net');
  //anchor.getAttribute('href');
}



*/








