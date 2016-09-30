angular.module('personalWebsite')
.controller('RecCtrl', ['$q', '$window', 
		function($q, $window) {
	var self = this;
	self.activeSlide = 0;

	self.slides = [{
		quote: "Milind has been able to engineer quality software over the course of his internship, working both independently and on a team. He's met and exceeded all of my expectations and deadlines, while always keeping future goals in mind. Milind has been a great addition to our team and I am glad to have been his mentor.",
		by: "Ryan Magani",
		position: "Software Analyst & Developer",
		company: "Intentional Software Corporation",
		active: true
	}, {
		quote: "I was very impressed with Milind's ability to pick up new technologies and utilize them effectively in solving various problems he was assigned this semester. He demonstrated consistency in his ability to break down problems and tackle them efficiently.",
		by: "Nael El Shawwa",
		position: "VP Engineering",
		company: "FlashStock",
		active: false
	}, {
		quote: "It has been an excellent experience working with Milind. He is not afraid to speak his mind and offer his professional opinion. In some situations, he would present an idea that he knew would require a lot more work, but would make the product better. Milind has also been there to make sure that all technical aspects are taken care of, even for other projects. It has been an absolute pleasure to work with Milind and I would highly recommend hiring him.",
		by: "Joshua Granek",
		position: "Defence Scientist",
		company: "Department of National Defence",
		active: false
	}];

	self.nextActive = function() {
		self.activeSlide = (self.activeSlide + 1) % self.slides.length;
		self.changeActive();
	}

	self.prevActive = function() {
		self.activeSlide = (((self.activeSlide - 1) % self.slides.length) + self.slides.length) % self.slides.length;
		self.changeActive();
	}

	self.chooseActive = function(index) {
		self.activeSlide = index;
		self.changeActive();
	}

	self.changeActive = function() {
		// self.animateSlides();
		for(var i=0; i<self.slides.length; i++){
			self.slides[i].active = false;
		}
		self.slides[self.activeSlide].active = true;
	}

	self.loadHighResImages = function() {
		var downloadingImage = new Image();
		var imageSrc = "app/images/mountRainerHighRes.jpg";
		downloadingImage.onload = function(){
			var imgDefer = document.getElementById('recommendation');
			imgDefer.style.backgroundImage = "url('"+imageSrc+"')";
		};
		downloadingImage.src = imageSrc;
	}

	

	self.loadHighResImages();

	/*self.animateSlides = function() {
		$("#slide0")
		.animate(
	        {
	            'margin-left':'1000px'
	        },1000,
	        function(){
	        	console.log("Here");
				for(var i=0; i<self.slides.length; i++){
					self.slides[i].active = false;
				}
				self.slides[self.activeSlide].active = true;
	        }
        );
	}*/
}]);