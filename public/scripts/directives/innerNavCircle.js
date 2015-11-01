angular.module('personalWebsite')
.directive('innerNavCircle', ["$q", function($q){

	return {
		restrict: 'E',
		controller: 'ResumeCtrl',
		controllerAs: 'resume',
		scope: {
			resumeNavCanvas: '='
		},
		link: function(scope, elem, attr, resume) {
			
			calculateSections().then(function(sectionValues){
				for(var i=0; i<sectionValues.length; i++){
					sectionValues[i] += 10;
				}
				drawSections(sectionValues);
			});

			function calculateSections(){
				var deferred = $q.defer();

				var numSections = resume.sections.length;
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

				deferred.resolve(sectionValues);

				return deferred.promise;
			}

			function getRandomIntInclusive(min, max) {
			  return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			function drawSections(sectionValues){
				var deferred = $q.defer();

				var radDrawnTo = 3/2*Math.PI + ((sectionValues[0]/100)*2*Math.PI)/2;
				var ctx = resumeNavCanvas.getContext("2d"); 
				var x = resumeNavCanvas.width / 2;
			    var y = resumeNavCanvas.height / 2;
			    var radius = resumeNavCanvas.width/2 * 4/5;
			    var startAngle, endAngle;
			    var startAngleWithSpace, endAngleWithSpace;
			    var lineWidth = radius/3 -8;
			    var counterClockwise = true;


				for(var i=0; i<sectionValues.length; i++){
					startAngle = radDrawnTo;
					endAngle = startAngle - (sectionValues[i]/100)*2*Math.PI;
					resume.sections[i].startAngle = startAngle;
					resume.sections[i].endAngle = endAngle;

					startAngleWithSpace = startAngle - (2*Math.PI/720);
					endAngleWithSpace = endAngle + (2*Math.PI/720);

					ctx.beginPath();
					ctx.arc(x, y, radius, startAngleWithSpace , endAngleWithSpace, counterClockwise);
					ctx.lineWidth = lineWidth;
					ctx.strokeStyle = resume.sections[i].color;
					ctx.stroke();

					radDrawnTo = endAngle;
				}
				
				return deferred.promise;	
			}

			resumeNavCanvas.onmouseup = function(event){
				var coordinates = getRelativeCoords(event);

				//Get co-ordinates relative to center of canvas
				var x = resumeNavCanvas.width / 2;
			    var y = resumeNavCanvas.height / 2;
				var radius = resumeNavCanvas.width/2 * 4/5;
				var lineWidth = radius/3 -8;
				coordinates.x = coordinates.x-x;
				coordinates.y = y-coordinates.y;
				console.log(coordinates);

				//Find out which section was clicked on
				var clickAngle = Math.atan2(coordinates.y, coordinates.x);
				clickAngle = convertRadiansToRange(clickAngle);
				var startAngle, endAngle;
				var angleSection = resume.sections.length-1; //default to last section

				resume.sections.forEach(function(section, index){
					startAngle = 2*Math.PI - section.startAngle;
					endAngle = 2*Math.PI - section.endAngle;

					if(clickAngle >= startAngle && clickAngle <= endAngle){
						angleSection = index;
					}

				});
				console.log(angleSection);


				//Find out if clicked within doughnut
				var maxRadius = Math.round(radius+(lineWidth/2))+5;
				var minRadius = Math.round(radius-(lineWidth/2))-5;
				var clickRadius = Math.sqrt(Math.pow(coordinates.x, 2) + Math.pow(coordinates.y, 2));
				var removedObject;
				if(clickRadius <= maxRadius && clickRadius >= minRadius){
					console.log("Clicked within range");
				}
			}

			function getRelativeCoords(event) {
			    if (event.offsetX !== undefined && event.offsetY !== undefined) { 
			    	return { x: event.offsetX, y: event.offsetY }; 
			    }
			    return { x: event.layerX, y: event.layerY };
			}

			function convertRadiansToRange(angle){
				while(angle > 2*Math.PI || angle < 0){
					if(angle > 2*Math.PI){
						angle -= 2*Math.PI;
					}
					
					if(angle < 0){
						angle += 2*Math.PI;
					}
				}

				return angle;
			}


		}
	}
}]);



