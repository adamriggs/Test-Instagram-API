'use strict'

function InstagramApp() {
	console.log("InstagramApp()");

	//next variables hold the html elements in a jquery wrapper
	this.$carousel = $(".carousel");
	this.$carouselImgs = $(".carousel-img");


	//see them in the console window
	console.log("carousel==", this.$carousel);
	console.log("carousel images ==", this.$carouselImgs);
};