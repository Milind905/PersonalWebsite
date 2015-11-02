angular.module('personalWebsite')
.directive('outerNavCircle', function(){
	return {
		restrict: 'E',
		scope: {
			resumeNavCanvas: '='
		},
		link: function(scope, elem, attr) {
			
			var ctx = resumeNavCanvas.getContext("2d"); 
			
			var x = resumeNavCanvas.width / 2;
		    var y = resumeNavCanvas.height / 2;
		    var radius = resumeNavCanvas.width/2*4/5;
		    var startAngle = 0;
		    var endAngle = 2*Math.PI;
		    var counterClockwise = false;

			ctx.beginPath();
			ctx.arc(x, y, radius, startAngle , endAngle, counterClockwise);
			ctx.lineWidth = radius/3;
			ctx.strokeStyle = 'black';	

			ctx.textAlign="center";
			ctx.textBaseline = 'middle';
			ctx.font="normal 30px HelveticaNeue-Thin";		
			ctx.fillStyle = '#B5B5B5';				
			ctx.fillText("Empty Text", x, y); 		
			ctx.stroke();
		}	
	}
});