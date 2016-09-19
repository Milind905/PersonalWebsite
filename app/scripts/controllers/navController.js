angular.module('personalWebsite')
.controller('NavCtrl', ["$state", "$location", "$anchorScroll", function($state, $location, $anchorScroll){
  var self = this;

/*  self.state = $state;*/
  $anchorScroll.yOffset = 50;
  self.activeTab = "home";

  self.navigate = function(strNav){
  	var oldUrl = $location.hash();

	$location.hash(strNav);

	$anchorScroll();
	$location.hash(oldUrl);
	self.activeTab = strNav;
  }
}]);