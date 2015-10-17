var app = angular.module('mainRoutes', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {
	'use strict'

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: '/views/index.html',
			controller: 'IndexCtrl',
			controllerAs: 'index',
		})

		.state('bio', {
			url : '/bio',
			templateUrl: '/views/bio.html',
			controller: 'BioCtrl',
			controllerAs: 'bio'
		})
		
	$urlRouterProvider.otherwise('/');
}]);