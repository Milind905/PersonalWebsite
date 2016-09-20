angular.module('personalWebsite')
	.controller('ResumeCtrl', ['circularNav', 'resumeContent', '$q', '$window', 
		function(circularNav, resumeContent, $q, $window) {
		
		var self = this;
		self.notSupportedMessage = "Sorry, it seems that this browser doesn't support canvases. Please try a different browser.";
		self.sectionSelected = circularNav.sectionSelected;
		self.jobExperience = resumeContent.jobExperience;
		self.environments = resumeContent.environments;
		self.courses = resumeContent.courses;

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

		// $window.addEventListener('resize', circularNav.resizeCanvas);
		$window.addEventListener('resize', function(){
			circularNav.resizeCanvas($window.innerWidth);
			resumeContent.resizeContent($window.innerWidth);
		});

		self.generateCanvas();
	}]);