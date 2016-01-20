angular.module('personalWebsite')
.controller('ContactCtrl', function(){
	var self = this;

	self.connections = [{
		title: 'LinkedIn',
		iconClass: 'fa-linkedin-square',
		subtitle: 'Connect',
		link: "https://ca.linkedin.com/in/mshah905"
	}, {
		title: 'Facebook',
		iconClass: 'fa-facebook-square',
		subtitle: 'Befriend',
		link: "https://www.facebook.com/milind905"
	}, {
		title: 'Github',
		iconClass: 'fa-github-square',
		subtitle: 'Commit',
		link: "https://github.com/Milind905"
	}, {
		title: 'Email',
		iconClass: 'fa-envelope',
		subtitle: 'mnshah@uwaterloo.ca',
		link: "/#/contact"
	}];
});