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

	/*KLUDGE CRUISE, yeah lets use angular, jquery, AND javascript...*/
	self.submitForm = function() {
		if (self.userForm.$valid) {
			/*console.log(self.fullName);
			console.log(self.email);
			console.log(self.subject);
			console.log(self.message);*/
			$('#emailSentModal').modal('show');
			setTimeout(function(){
		        $('#emailSentModal').modal('hide');
		    }, 1500);
		}
	};

});