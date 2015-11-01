angular.module('personalWebsite')
.controller('ResumeCtrl', function(){
	var self = this;

	self.sections = [
		{"title": "Experience",
		 "color": "blue"}, 
		{"title": "Skills",
		"color": "red"}, 
		{"title": "Education",
		"color": "purple"}, 
		{"title:": "Projects",
		"color": "green"}
		];

	self.selectedSection = 0;
});
