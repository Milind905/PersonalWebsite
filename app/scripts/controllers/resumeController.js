angular.module('personalWebsite')
.controller('ResumeCtrl', ['$scope', function($scope){
	'use strict'

	var self = this;
	self.notSupportedMessage = "Sorry, it seems that this browser doesn't support canvases. Please try a different browser."

	self.myNewChart;
	self.sectionSelected = null;
	self.currentlySelected = 0;
	self.colors = {
		blue: "#0FA3FF",
		blueHighlight: "#004BD6",
		grey: "#B5B5B5",
		greyHighlight: "#0D62FF"
	}
	
	self.sections = [
	    {
	        value: 1,
	        color: self.colors.blue,
	        highlight: self.colors.blueHighlight,
	        label: "Experience"
	    },
	    {
	        value: 1,
	        color: self.colors.grey,
	        highlight: self.colors.greyHighlight,
	        label: "Skills"
	    },
	    {
	        value: 1,
	        color: self.colors.grey,
	        highlight: self.colors.greyHighlight,
	        label: "Education"
	    },
	    {
	    	value: 1,
	    	color: self.colors.grey,
	    	highlight: self.colors.greyHighlight,
	    	label: "Projects"
	    }
	];

	self.options = {
	    animationEasing: "easeInOutCirc",
	    animationSteps: 30,
	    segmentStrokeColor : "#1C1C1C",
	    segmentStrokeWidth : 2,
	    showTooltips: true,
	    tooltipFontFamily: "'Helvetica-Neue-Thin', 'Source-Sans-Pro', 'Helvetica', sans-serif",
	    tooltipFontSize: 18,
	    tooltipTemplate: "<%if (label){%><%=label%><%}%>",
	    percentageInnerCutout : 75,

	    onAnimationComplete: function () {
	    	self.changeNavLabel(self.sectionSelected);
	    	//Either this or show curved text
	    	//this.showTooltip(this.segments, true);
	    }
	};

    self.changeNavLabel = function(labelValue){
    	if(labelValue === null){
    		labelValue = self.sections[0].label;
    	}
    	var textCanvas = document.getElementById("textCanvas");
    	var textCtx = $("#textCanvas").get(0).getContext("2d");
    	textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
		textCtx.textAlign="center";
		textCtx.textBaseline = 'middle';
		textCtx.font="normal 40px Helvetica-Neue-Thin";		
		textCtx.fillStyle = '#0FA3FF';
		textCtx.fillText(labelValue, textCanvas.width/2, textCanvas.height/2);
    }

    self.generateCanvas = function(){
        self.calculateSections();
        var ctx = $("#resumeNavCanvas").get(0).getContext("2d");
        self.myNewChart = new Chart(ctx).Doughnut(self.sections, self.options);
        self.sectionSelected = self.sections[0].label;
	}

    self.calculateSections = function(){
    	var numSections = self.sections.length;
		var percentLeft = 100 - 10*numSections;
		var sectionMax, sectionMin, sectionAvg;
		var sectionValues = [];

		for(var i=0; i<numSections; i++){
			sectionAvg = Math.round(percentLeft/(numSections-i));
			sectionMax = sectionAvg + 10;
			sectionMin = sectionAvg - 10;
			
			if(sectionMin < 0){
				sectionMin = 0;
			}

			if(percentLeft - sectionMax < 0){
				sectionMax = sectionAvg;
			}

			if(i === numSections-1){
				sectionValues[i] = percentLeft;
				percentLeft -= sectionValues[i];
			}
			else {
				sectionValues[i] = self.getRandomIntInclusive(sectionMin, sectionMax);
				percentLeft -= sectionValues[i];
			}
		}

		for(var i=0; i<sectionValues.length; i++){
			self.sections[i].value = sectionValues[i]+10;
		}
    }

    self.getRandomIntInclusive = function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//Some kind of animation? Maybe cube rotating?
	self.rebuildCanvas = function(event){
		var activePoints = self.myNewChart.getSegmentsAtEvent(event);
		var segmentClicked = 0;
		var section;

		if(!(activePoints[0])) {
    		return;
    	}

		for(var i=0; i<self.sections.length; i++)
		{
			if(self.sections[i].label === activePoints[0].label){
				segmentClicked = i;
			}
		}

		if(segmentClicked === self.currentlySelected){
			return;
		}

		for(var i=0; i<self.sections.length; i++){
			if(i === segmentClicked){
				self.sections[i].color = self.colors.blue;
				self.sections[i].highlight = self.colors.blueHighlight;
			}
			else {
				self.sections[i].color = self.colors.grey;
				self.sections[i].highlight = self.colors.greyHighlight;
			}
		}
		self.sectionSelected = self.sections[segmentClicked].label;
		self.currentlySelected = segmentClicked;
		self.myNewChart.destroy();
		var ctx = $("#resumeNavCanvas").get(0).getContext("2d");
		self.myNewChart = new Chart(ctx).Doughnut(self.sections, self.options);
	}
	

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

	self.environments = [
		{name: "Amazon S3", file: "amazonIcon.png"}, 
		{name: "Android Studio", file: "androidStudioIcon.png"},
		{name: "XCode", file: "xcodeIcon.png"},
		{name: "Titanium Studio", file: "titaniumStudioIcon.png"}, 
		{name: "Ubuntu", file: "ubuntuIcon.png"}, 
		{name: "Photoshop", file: "photoshopIcon.png"},
		{name: "SQL Developer", file: "sqldevIcon.png"}, 
		{name: "Git", file: "gitIcon.png"}
	];

	self.courses = [
		{name: 'Digital Computers', iconClass: 'fa-desktop'},
		{name: 'Embedded Microprocessors', iconClass: 'fa-usb'},
		{name: 'Algorithms & Data Structures', iconClass: 'fa-tree'},
		{name: 'Operating Systems', iconClass: 'fa-stack-overflow' },
		{name: 'Advanced Calculus', iconClass: 'fa-calculator'},
		{name: 'Linear Algebra', iconClass: 'fa-th'},
		{name: 'Discrete Mathematics', iconClass: 'fa-plus-square'},
		{name: 'Digital Circuits', iconClass: 'fa-bolt'}
	];

	/*self.flipCard = function(index){
	var tempClass = self.jobExperience[index].frontSide;
	self.jobExperience[index].frontSide = self.jobExperience[index].backSide;
	self.jobExperience[index].backSide = tempClass;
	}*/

	self.generateCanvas();

}]);
