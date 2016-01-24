angular.module('personalWebsite')
.factory('circularNav', ['$q', function($q){
	var circularNav = {};

	circularNav.sectionSelected = null;
	circularNav.currentlySelected = 0;
	circularNav.myNewChart;

	circularNav.colors = {
		blue: "#0FA3FF",
		blueHighlight: "#004BD6",
		grey: "#B5B5B5",
		greyHighlight: "#0D62FF"
	}

	circularNav.options = {
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
	    	changeNavLabel(circularNav.sectionSelected);
	    	//this.showTooltip(this.segments, true);
	    }
	};

	circularNav.sections = [
	    {
	        value: 1,
	        color: circularNav.colors.blue,
	        highlight: circularNav.colors.blueHighlight,
	        label: "Experience"
	    },
	    {
	        value: 1,
	        color: circularNav.colors.grey,
	        highlight: circularNav.colors.greyHighlight,
	        label: "Skills"
	    },
	    {
	        value: 1,
	        color: circularNav.colors.grey,
	        highlight: circularNav.colors.greyHighlight,
	        label: "Education"
	    },
	    {
	    	value: 1,
	    	color: circularNav.colors.grey,
	    	highlight: circularNav.colors.greyHighlight,
	    	label: "Projects"
	    }
	];

	circularNav.generateCanvas = function(){
		var deferred = $q.defer();
        var ctx = document.getElementById('resumeNavCanvas').getContext('2d');
        circularNav.myNewChart = new Chart(ctx).Doughnut(circularNav.sections, circularNav.options);
        circularNav.sectionSelected = circularNav.sections[circularNav.currentlySelected].label;
        deferred.resolve();
        return deferred.promise;
	}

	circularNav.rebuildCanvas = function(event){
		var deferred = $q.defer();
		var activePoints = circularNav.myNewChart.getSegmentsAtEvent(event);
		var segmentClicked = 0;
		var section;

		if(!(activePoints[0])) {
    		return;
    	}

		for(var i=0; i<circularNav.sections.length; i++)
		{
			if(circularNav.sections[i].label === activePoints[0].label){
				segmentClicked = i;
			}
		}

		if(segmentClicked === circularNav.currentlySelected){
			return;
		}

		for(var i=0; i<circularNav.sections.length; i++){
			if(i === segmentClicked){
				circularNav.sections[i].color = circularNav.colors.blue;
				circularNav.sections[i].highlight = circularNav.colors.blueHighlight;
			}
			else {
				circularNav.sections[i].color = circularNav.colors.grey;
				circularNav.sections[i].highlight = circularNav.colors.greyHighlight;
			}
		}
		circularNav.currentlySelected = segmentClicked;	
		circularNav.myNewChart.destroy();
		circularNav.generateCanvas().then(function(){
			deferred.resolve();
		});

		return deferred.promise;
	}

	circularNav.calculateSections = function(){
		var deferred = $q.defer();

    	var numSections = circularNav.sections.length;
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
				sectionValues[i] = getRandomIntInclusive(sectionMin, sectionMax);
				percentLeft -= sectionValues[i];
			}
		}

		for(var i=0; i<sectionValues.length; i++){
			circularNav.sections[i].value = sectionValues[i]+10;
		}

		deferred.resolve();
		return deferred.promise;
    }

    function getRandomIntInclusive(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function changeNavLabel(labelValue){
		if(labelValue === null){
    		labelValue = circularNav.sections[0].label;
    	}
    	var textCanvas = document.getElementById("textCanvas");
    	var textCtx = document.getElementById('textCanvas').getContext('2d');

    	textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
		textCtx.textAlign="center";
		textCtx.textBaseline = 'middle';
		textCtx.font="normal 40px Helvetica-Neue-Thin";		
		textCtx.fillStyle = '#0FA3FF';
		textCtx.fillText(labelValue, textCanvas.width/2, textCanvas.height/2);
	}

	return circularNav;
}]);