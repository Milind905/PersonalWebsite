angular.module('personalWebsite')
.directive('tab', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '/views/includes/tabDirective.html',
		controller: 'ResumeCtrl',
		controllerAs: 'resume',
		link: function(scope, elem, attr, resume) {
			resume.addTab();
		}
	}
});