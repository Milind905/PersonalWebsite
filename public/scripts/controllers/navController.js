angular.module('personalWebsite')
.controller('NavCtrl', ["$state", function($state){
  var self = this;

  self.state = $state;
}]);