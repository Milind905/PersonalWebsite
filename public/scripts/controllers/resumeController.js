angular.module('personalWebsite')
.controller('ResumeCtrl', function(){
	var self = this;
	self.notSupportedMessage = "Sorry, it seems that this browser doesn't support canvases. Please try a different browser."

	self.myNewChart;
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

    $(document).ready( 
	    function () {
	    	self.calculateSections();
	        var ctx = $("#resumeNavCanvas").get(0).getContext("2d");
	        self.myNewChart = new Chart(ctx).Doughnut(self.sections, self.options);

	        $("#resumeNavCanvas").click( 
	            function(evt){
	         		var activePoints = self.myNewChart.getSegmentsAtEvent(evt);
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
	       				self.changeSelectedSection();
	        		}
        			
	            }
	        );
	    }
    );

	self.changeSelectedSection = function(){
		self.sectionSelected = self.sections[0].label;
		console.log(self.sectionSelected);
	}

    
	

});
