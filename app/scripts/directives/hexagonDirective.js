angular.module('personalWebsite')
.directive('hexagon', function(){
	return {
		restrict: 'E',
		template: function(element, attrs){
			console.log("Color: ", attrs.color);
			return 
			"<div ng-switch='attrs.color'>" +
				"<div ng-switch-when='red'>" +
					"<div class='hexagon' id='redHexagon'><h1>Stuff</h1></div>" +
				"</div>" +
			"</div>";

		},
		link: function(scope, element, attrs) {
			//animation here
			//console.log("Color: ", scope.color);
		}	
	}
});
