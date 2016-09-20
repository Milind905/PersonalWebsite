angular.module('personalWebsite')
	.controller('ResumeCtrl', ['circularNav', '$q', '$window', function(circularNav, $q, $window) {
		var self = this;
		self.notSupportedMessage = "Sorry, it seems that this browser doesn't support canvases. Please try a different browser.";
		self.sectionSelected = circularNav.sectionSelected;

		//TODO: Some kind of animation? Maybe cube rotating?
		self.generateCanvas = function() {
			circularNav.calculateCanvasCSS().then(function() {
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

		self.jobExperience = [{
			frontSide: "front",
			backSide: "back",
			id: "scotiabank",
			textDown: true,
			title: "Scotiabank",
			date: "May 2014 - August 2014",
			position: "Database Analyst",
			logo: "/app/images/scotiabankLogo.png",
			info: [
				"Refactored backend of internal website",
				"Upgraded server and database to be compatible with windows 7",
				"Automated process of generating reports"
			]
		}, {
			frontSide: "front",
			backSide: "back",
			id: "dond",
			textDown: false,
			title: "Department of National Defence",
			date: "January 2015 - April 2015",
			position: "Mobile Developer",
			logo: "/app/images/dondLogo.png",
			info: [
				"Developed gamified version of Dual-N-Back memory task",
				"Game was built for both Android and iOS",
				"Created designs for 6 related applications"
			]
		}, {
			frontSide: "front",
			backSide: "back",
			id: "flashstock",
			textDown: true,
			title: "Flashstock",
			date: "September 2015 - December 2015",
			position: "Web Developer",
			logo: "/app/images/flashstockLogo.png",
			info: [
				"Implemented new features for three web apps",
				"Built grid of re-arrangeable and downloadable images",
				"Created an algorithm to compare images"
			]
		}];

		self.environments = [{
			name: "Amazon S3",
			file: "amazonIcon.png"
		}, {
			name: "Android Studio",
			file: "androidStudioIcon.png"
		}, {
			name: "XCode",
			file: "xcodeIcon.png"
		}, {
			name: "Titanium Studio",
			file: "titaniumStudioIcon.png"
		}, {
			name: "Ubuntu",
			file: "ubuntuIcon.png"
		}, {
			name: "Photoshop",
			file: "photoshopIcon.png"
		}, {
			name: "SQL Developer",
			file: "sqldevIcon.png"
		}, {
			name: "Git",
			file: "gitIcon.png"
		}];

		self.courses = [{
			name: 'Compilers',
			iconClass: 'fa-list'
		}, {
			name: 'Embedded Microprocessors',
			iconClass: 'fa-usb'
		}, {
			name: 'Algorithms & Data Structures',
			iconClass: 'fa-tree'
		}, {
			name: 'Operating Systems',
			iconClass: 'fa-stack-overflow'
		}, {
			name: 'Probability & Statistics',
			iconClass: 'fa-calculator'
		}, {
			name: 'Linear Algebra',
			iconClass: 'fa-th'
		}, {
			name: 'Discrete Mathematics',
			iconClass: 'fa-plus-square'
		}, {
			name: 'Digital Computers',
			iconClass: 'fa-desktop'
		}];

		$window.addEventListener('resize', circularNav.resizeCanvas);
		self.generateCanvas();
	}]);