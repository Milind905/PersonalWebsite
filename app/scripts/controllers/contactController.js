angular.module('personalWebsite')
.controller('ContactCtrl', function(){
	var self = this;

	self.socialMedia = [{
		id: "mediaGitHub",
		icon: "fa-github-square",
		link: "https://www.linkedin.com/in/milindNshah"
	}, {
		id: "mediaLinkedIn",
		icon: "fa-linkedin-square",
		link: "https://github.com/milindNshah"
	}, {
		id: "mediaEmail",
		icon: "fa-envelope",
		link: "mailto:mnshah@uwaterloo.ca"
	}];

});