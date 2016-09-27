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
			"Decreased the amount of navigation and wait time of an internal website by re-designing the navigation system and refactoring the website's backend code",
			"Upgraded department's servers and databases to be compatible with Windows 7",
			"Automated the process of creating various statistical reports using PHP and VBA, significantly reducing developer time spent writing those reports"
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
			"Developed a gamified version of the 'Dual N-back' cognitive task that is used by the Canadian Armed Forces to enhance fluid intelligence and working memory",
			"The 'Dual N-back' game was created for both Android and iOS as 1 of 7 apps for Mental Health Canada",
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
			"Implemented new features across multiple web applications using the MEAN stack",
			"Developed a feature that allows the content generation team to create a 5x5 grid of images that can be rearranged, panned, and downloaded without loss of quality or resolution, reducing the time spent from 1 hour to 5 minutes",
			"Created an algorithm to filter out invalid images which resulted in a 25% speed improvement in the curation process"
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
			"Implemented a new texture cache algorithm by developing a memory pressure based solution which resulted in large performance improvements in extreme scenarios",
			"Built a markdown text editor with full editing capabilities on both the text-rich pane and markdown pane that is capable of updating both panes simultaneously",
			"Designed a markdown parser from scratch to accompany the markdown text editor"
		]
	}];

	resumeContent.environments = [{
		name: "AWS",
		file: "amazonIcon.png"
	}, {
		name: "Android Studio",
		file: "androidStudioIcon.png"
	}, {
		name: "Git",
		file: "gitIcon.png"
	}, {
		name: "MongoDB",
		file: "mongodbIcon.png"
	}, {
		name: "Photoshop",
		file: "photoshopIcon.png"
	}, {
		name: "Titanium Studio",
		file: "titaniumStudioIcon.png"
	}, {
		name: "Visual Studio",
		file: "visualStudioLogo.png"
	}, {
		name: "XCode",
		file: "xcodeIcon.png"
	}];

	resumeContent.courses = [ {
		name: 'Algorithms & Data Structures',
		iconClass: 'fa-tree'
	}, {
		name: 'Compilers',
		iconClass: 'fa-list'
	}, {
		name: 'Computer Networks',
		iconClass: 'fa-sitemap'
	}, {
		name: 'Database Systems',
		iconClass: 'fa-database'
	}, {
		name: 'Discrete Mathematics',
		iconClass: 'fa-plus-square'
	}, {
		name: 'Embedded Microprocessors',
		iconClass: 'fa-usb'
	}, {
		name: 'Operating Systems',
		iconClass: 'fa-stack-overflow'
	}, {
		name: 'Probability & Statistics',
		iconClass: 'fa-calculator'
	}];

	return resumeContent;
}]);