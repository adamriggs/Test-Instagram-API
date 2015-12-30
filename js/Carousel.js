'use strict'

function Carousel() {
	console.log("Carousel()");

	//next variables hold the html elements in a jquery wrapper
	//when we have these elements as javascript variables we have much more control over them and can do things like make them scroll like a carousel
	this.$carousel = $(".carousel");	//the $ is indicative of jquery which smooths out the differences in how browsers handle javascript
	this.$viewport = this.$carousel.find("> .viewport");
	this.$carouselImgs = this.$viewport.find("> .carousel-img");	//since there are many things with the class carousel-img this variable is an array.  Actually they all are but if the length is 0 its treated like its not an array


	//see them in the console window
	//console.log("carousel==", this.$carousel);
	//console.log("viewport==", this.$viewport);
	//console.log("carousel images==", this.$carouselImgs);

	this.carouselImgs = [];  // an array to hold the carousel image objects, which are different from the html elements
	this.carouselImgsLength = 0;

	this.tweens = [];
	this.tweenTime = 2;
	this.tweenDelay = 5000;
	this.tweenFinishedCount = 0;
	this.tweenDistance = '-302px';

	//for every carousel-img create a new js object and pass the html element into it
	for(var i = 0; i < this.$carouselImgs.length; i++){

		//sometimes when you deal with arrays of jquery objects they stop being jquery objects and they are simple html DOM elements
		//I then re-wrap them in the $ so they become jquery objects again.  THEN I pass them into the CarouselItem object
		this.carouselImgs.push( new CarouselItem($(this.$carouselImgs[i])));
		this.carouselImgsLength = this.carouselImgs.length;
	}

	this.startAnimation();
	
};

Carousel.prototype.startAnimation = function() {
	console.log("Carousel.startAnimation()");
	var _this = this;
		
	for(var i=0; i<this.carouselImgsLength; i++){
		this.tweens.push(TweenLite.to(this.carouselImgs[i].$el, this.tweenTime, {
			left: this.tweenDistance,
			onComplete:this.finishTween,
			onCompleteParams: [i, _this]
		}));
	}
};

Carousel.prototype.finishTween = function (Index, This) {

	This.tweens[Index].kill();
	This.tweenFinishedCount++;

	// console.log(This.tweenFinishedCount);
	// console.log(This.carouselImgsLength);

	if(This.tweenFinishedCount==This.carouselImgsLength){
		console.log("all tweens finished");
		
		This.tweenFinishedCount = 0;
		delete This.tweens;
		This.tweens = [];
		
		for(var i=0; i<This.carouselImgsLength; i++){
			//console.log(i);
			This.carouselImgs[i].$el.css({left:'0px'});
		}
		
		var tmpCI = This.carouselImgs[0];
		This.carouselImgs[0].$el.remove();
		This.$viewport.append(tmpCI.$el);
		
		This.carouselImgs.shift();
		This.carouselImgs.push(tmpCI);

		//console.log(This.tweenDelay);
		setTimeout(This.startAnimation.bind(This), This.tweenDelay);
	}
};













