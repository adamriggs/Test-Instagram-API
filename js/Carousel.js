'use strict'

function Carousel() {
	console.log("Carousel()");

	//next variables hold the html elements in a jquery wrapper
	//when we have these elements as javascript variables we have much more control over them and can do things like make them scroll like a carousel
	this.$carousel = $(".carousel");	//the $ is indicative of jquery which smooths out the differences in how browsers handle javascript
	this.$carouselImgs = $(".carousel-img");	//since there are many things with the class carousel-img this variable is an array.  Actually they all are but if the length is 0 its treated like its not an array


	//see them in the console window
	console.log("carousel==", this.$carousel);
	console.log("carousel images==", this.$carouselImgs);

	this.carouselImgs = [];  // an array to hold the carousel image objects, which are different from the html elements

	//for every carousel-img create a new js object and pass the html element into it
	for(var i = 0; i < this.$carouselImgs.length; i++){

		//sometimes when you deal with arrays of jquery objects they stop being jquery objects and they are simple html DOM elements
		//I then re-wrap them in the $ so they become jquery objects again.  THEN I pass them into the CarouselItem object
		this.carouselImgs.push( new CarouselItem($(this.$carouselImgs[i])));
	}
	
};