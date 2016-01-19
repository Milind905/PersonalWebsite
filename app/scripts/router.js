var app = angular.module('mainRoutes', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {
	'use strict'

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: '/app/views/index.html',
			controller: 'IndexCtrl',
			controllerAs: 'index',
			activeTab: 'index'
		})

		.state('about', {
			url: '/about',
			templateUrl: '/app/views/about.html',
			controller: 'AboutCtrl',
			controllerAs: 'about',
			activeTab: 'about'
		})

		.state('resume', {
			url: '/resume',
			templateUrl: '/app/views/resume.html',
			controller: 'ResumeCtrl',
			controllerAs: 'resume',
			activeTab: 'resume'
		})

		.state('contact', {
			url: '/contact',
			templateUrl: '/app/views/contact.html',
			controller: 'ContactCtrl',
			controllerAs: 'contact',
			activeTab: 'contact'
		})
		
	$urlRouterProvider.otherwise('/');
}]);