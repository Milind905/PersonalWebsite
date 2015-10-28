angular.module('personalWebsite')
.controller('ResumeCtrl', function(){
	var self = this;

	self.addTab = function(){
		console.log("Added");
	}	

	self.select = function(index){
		console.log("Selected ", index);
	}
});