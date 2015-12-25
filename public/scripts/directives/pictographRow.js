angular.module('personalWebsite')
.directive('pictographRow', function(){

	return {
		restrict: 'E',
		template: function(element, attrs){

			var string = "";
			for(var i=0; i<10; i++){
				if(i<attrs.filled){
					string += "<i class='fa fa-circle'></i>"
				}
				else {
					string +="<i class='fa fa-circle unfilled'></i>"
				}
			}


			return string;
		}
	}
});
