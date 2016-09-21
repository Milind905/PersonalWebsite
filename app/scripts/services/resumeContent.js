angular.module('personalWebsite')
.factory('resumeContent', ['$q', function($q){
	var resumeContent = {};

	resumeContent.jobExperience = [{
		frontSide: "front",
		backSide: "back",
		id: "scotiabank",
		textDown: true,
		title: "Scotiabank",
		date: "May 2014 - August 2014",
		position: "Database Analyst",
		info: [
			"Refactored backend of internal website",
			"Upgraded server and database to be compatible with windows 7",
			"Automated process of generating reports"
		]
	}, {
		frontSide: "front",
		backSide: "back",
		id: "dond",
		textDown: false,
		title: "Department of National Defence",
		date: "January 2015 - April 2015",
		position: "Mobile Developer",
		info: [
			"Developed gamified version of Dual-N-Back memory task",
			"Game was built for both Android and iOS",
			"Created designs for 6 related applications"
		]
	}, {
		frontSide: "front",
		backSide: "back",
		id: "flashstock",
		textDown: true,
		title: "Flashstock",
		date: "September 2015 - December 2015",
		position: "Web Developer",
		info: [
			"Implemented new features for three web apps",
			"Built grid of re-arrangeable and downloadable images",
			"Created an algorithm to compare images"
		]
	}, {
		frontSide: "front",
		backSide: "back",
		id: "intentional",
		textDown: false,
		title: "Intentional Software",
		date: "May 2016 - August 2016",
		position: "Software Developer",
		info: [
			"Implemented new features for three web apps",
			"Built grid of re-arrangeable and downloadable images",
			"Created an algorithm to compare images"
		]
	}];

	resumeContent.environments = [{
		name: "Amazon S3",
		file: "amazonIcon.png"
	}, {
		name: "Android Studio",
		file: "androidStudioIcon.png"
	}, {
		name: "XCode",
		file: "xcodeIcon.png"
	}, {
		name: "Titanium Studio",
		file: "titaniumStudioIcon.png"
	}, {
		name: "Ubuntu",
		file: "ubuntuIcon.png"
	}, {
		name: "Photoshop",
		file: "photoshopIcon.png"
	}, {
		name: "SQL Developer",
		file: "sqldevIcon.png"
	}, {
		name: "Git",
		file: "gitIcon.png"
	}];

	resumeContent.courses = [{
		name: 'Compilers',
		iconClass: 'fa-list'
	}, {
		name: 'Embedded Microprocessors',
		iconClass: 'fa-usb'
	}, {
		name: 'Algorithms & Data Structures',
		iconClass: 'fa-tree'
	}, {
		name: 'Operating Systems',
		iconClass: 'fa-stack-overflow'
	}, {
		name: 'Probability & Statistics',
		iconClass: 'fa-calculator'
	}, {
		name: 'Linear Algebra',
		iconClass: 'fa-th'
	}, {
		name: 'Discrete Mathematics',
		iconClass: 'fa-plus-square'
	}, {
		name: 'Digital Computers',
		iconClass: 'fa-desktop'
	}];

	return resumeContent;
}]);