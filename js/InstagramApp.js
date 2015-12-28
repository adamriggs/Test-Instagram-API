'use strict'

function InstagramApp() {
	console.log("InstagramApp()");

	//next variables hold the html elements in a jquery wrapper
	//when we have these elements as javascript variables we have much more control over them and can do things like make them scroll like a carousel
	this.$carousel = $(".carousel");
	this.$carouselImgs = $(".carousel-img");


	//see them in the console window
	console.log("carousel==", this.$carousel);
	console.log("carousel images==", this.$carouselImgs);
};