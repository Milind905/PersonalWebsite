angular.module('personalWebsite')
.controller('ResumeCtrl', ['$scope', function($scope){
	'use strict'

	var self = this;
	self.notSupportedMessage = "Sorry, it seems that this browser doesn't support canvases. Please try a different browser."

	self.myNewChart;
	self.sectionSelected;
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
	    scaleBeginAtZero: false,
	    segmentStrokeWidth : 2,
	    showTooltips: true,
	    tooltipFontFamily: "'Helvetica-Neue-Thin', 'Source-Sans-Pro', 'Helvetica', sans-serif",
	    tooltipFontSize: 18,
	    tooltipTemplate: "<%if (label){%><%=label%><%}%>",
	    percentageInnerCutout : 75,
	    responsive: true,

	    onAnimationComplete: function () {
	    	self.changeNavLabel(this.segments[0].label);
	    	//Either this or show curved text
	    	this.showTooltip(this.segments, true);
	    }
	};

    self.changeNavLabel = function(labelValue){
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
		var toShift = 0;
		var section;

		if(!(activePoints[0])) {
    		return;
    	}

		for(var i=0; i<self.sections.length; i++)
		{
			if(self.sections[i].label === activePoints[0].label){
				toShift = i;
			}
		}

		for(var i=0; i<toShift; i++){
			section = self.sections.shift();
			self.sections.push(section);
		}

		for(var i=0; i<self.sections.length; i++){
			if(i == 0){
				self.sections[i].color = self.colors.blue;
				self.sections[i].highlight = self.colors.blueHighlight;
			}
			else {
				self.sections[i].color = self.colors.grey;
				self.sections[i].highlight = self.colors.greyHighlight;
			} 
		}

		//Change to update (remove element, add it to end, make it look like graph is shifting)
		if(toShift !=0){
			self.myNewChart.destroy();
			var ctx = $("#resumeNavCanvas").get(0).getContext("2d");
				self.myNewChart = new Chart(ctx).Doughnut(self.sections, self.options);
		}
		self.sectionSelected = self.sections[0].label;
	}

	

	self.jobExperience = [{
		frontSide: "front",
		backSide: "back",
		id: "scotiabank",
		textDown: true,
		title: "Scotiabank",
		date: "May 2014 - August 2014",
		position: "Database Analyst",
		logo: "../images/scotiabankLogo.png",
		info: [
			"Redesigned entire backend of internal website",
			"Upgraded server to be compatible with windows 7",
			"Modified MSAccess databases to work with upgraded server and redesigned website"
		] 
	}, {
		frontSide: "front",
		backSide: "back",
		id: "dond",
		textDown: false,
		title: "Department of National Defence",
		date: "January 2015 - April 2015",
		position: "Mobile Developer",
		logo: "../images/dondLogo.png",
		info: [
			"Fully developed an Android and iOS memory game app",
			"Designed gamified version of Dual-N-Back memory task",
			"Revised designs for 6 related applications"
		] 
	}, {
		frontSide: "front",
		backSide: "back",
		id: "flashstock",
		textDown: true,
		title: "Flashstock",
		date: "September 2015 - December 2015",
		position: "Web Developer",
		logo: "../images/flashstockLogo.png",
		info: [
			"Add items here",
			"Add items here 2",
			"Add items here 3"
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

	self.english = [{
		value: 100,
		color: "#0FA3FF",
		highlight: "#0FA3FF",
	}];

	self.gujarati = [{
		value: 75,
		color: "#0FA3FF",
		highlight: "#0FA3FF",
	}, {
		value: 25,
		color: "#B5B5B5",
		highlight: "#B5B5B5"
	}];

	self.french = [{
		value: 25,
		color: "#0FA3FF",
		highlight: "#0FA3FF",
	}, {
		value: 75,
		color: "#B5B5B5",
		highlight: "#B5B5B5"
	}];

	self.languageChartOptions = {
		animation: false,
		showTooltips: false,
		percentageInnerCutout: 80,
		segmentStrokeColor : "#1C1C1C",
	}

	self.generateLanguageCharts = function(){
        var englishCtx = document.getElementById("englishChart").getContext("2d");
		new Chart(englishCtx).Doughnut(self.english, self.languageChartOptions);
		var	gujaratiCtx = document.getElementById("gujaratiChart").getContext("2d");
		new Chart(gujaratiCtx).Doughnut(self.gujarati, self.languageChartOptions);
		var	frenchCtx = document.getElementById("frenchChart").getContext("2d");
		new Chart(frenchCtx).Doughnut(self.french, self.languageChartOptions);
	}

	self.generateCanvas();
	self.generateLanguageCharts();

}]);
