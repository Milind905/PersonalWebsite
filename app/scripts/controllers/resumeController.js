angular.module('personalWebsite')
	.controller('ResumeCtrl', ['circularNav', 'resumeContent', '$q', '$window', 
		function(circularNav, resumeContent, $q, $window) {
		
		var self = this;
		self.notSupportedMessage = "Sorry, it seems that this browser doesn't support canvases. Please try a different browser.";
		self.sectionSelected = circularNav.sectionSelected;
		self.jobExperience = resumeContent.jobExperience;
		self.environments = resumeContent.environments;
		self.courses = resumeContent.courses;
		self.timeStamp = 0;

		self.loadHighResImages = function() {
			console.log("Loading High Res Image...") // Confirm if this works on server

			var imgDefer = document.getElementsByClassName('firstContainer');
			imgDefer[0].style.backgroundImage = "url('app/images/mountRainierNightHighRes.jpg')";
		}
 
		//TODO: Some kind of animation? Maybe cube rotating?
		self.generateCanvas = function() {
			circularNav.calculateCanvasCSS($window.innerWidth).then(function() {
				return circularNav.calculateSections();
			}).then(function() {
				return circularNav.generateCanvas();
			}).then(function() {
				self.sectionSelected = circularNav.sectionSelected;
			});
		};

		self.rebuildCanvas = function(event) {
			circularNav.rebuildCanvas(event).then(function() {
				self.sectionSelected = circularNav.sectionSelected;
			});
		};

		$window.addEventListener('resize', function(e){
			if((e.timeStamp - self.timeStamp) > 300) {
				console.log("here");
				circularNav.resizeCanvas($window.innerWidth);
				self.timeStamp = e.timeStamp;
			}
		});

		self.loadHighResImages();
		self.generateCanvas();
	}]);