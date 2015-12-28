'use strict'

function InstagramApp() {
	console.log("InstagramApp()");

	//if our document had other user interface elements then we would instantiate them here too
	this.carousel = new Carousel();

	//javascript variable scoping is weird.  There's a difference between using 'this.varname' and 'var varname' in js

};