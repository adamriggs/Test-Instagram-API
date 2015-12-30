'use strict'

function CarouselItem(El) {
	this.$el = El;

	//I like to do this sometimes to make sure that the data is passed into the object correctly
	//console.log(this.$el);

	//You can have dymanic control of css properties like width or... position - which is what we will be using to scroll the carousel.
	//we dont' really need to set the width here.  I just wanted to illustrate that you could.
	//using straight css is actually faster and more reliable.  You should only control the css with javascript when you need to.
	//this.$el.css({width: '300px'});

};