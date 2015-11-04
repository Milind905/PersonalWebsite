angular.module('personalWebsite')
.controller('AboutCtrl', function(){
	var self = this;

	self.test = 'Hello About!';
	self.keys.ENTER = 16;

	self.keyDown = function($event){
		console.log("here: ",$event);

	}
});