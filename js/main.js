'use strict'

//use strict means that javascript is interpreted in a strict sense and not a losy goosey way that it sometimes can be


//an event is fired when the document is loaded and ready
$(document).ready(function() {
	console.log("***** DOCUMENT READY *****");
	
	//only after the document is loaded and ready should we start our javascript
	var app = new InstagramApp();
});