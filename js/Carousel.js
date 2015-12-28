'use strict'

function Carousel() {
	console.log("Carousel()");

	//next variables hold the html elements in a jquery wrapper
	//when we have these elements as javascript variables we have much more control over them and can do things like make them scroll like a carousel
	this.$carousel = $(".carousel");	//the $ is indicative of jquery which smooths out the differences in how browsers handle javascript
	this.$carouselImgs = $(".carousel-img");


	//see them in the console window
	console.log("carousel==", this.$carousel);
	console.log("carousel images==", this.$carouselImgs);

	this.carouselImgs = [];  // an array to hold the carousel image objects, which are different from the html elements

	for(var i = 0; i < this.$carouselImgs.length; i++){
		this.carouselImgs.push( new CarouselItem(this.$carouselImgs[i]));

	}
	
};