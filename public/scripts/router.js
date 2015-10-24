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
			activeTab: 'index'
		})

		.state('resume', {
			url: '/resume',
			templateUrl: '/views/resume.html',
			controller: 'ResumeCtrl',
			controllerAs: 'resume',
			activeTab: 'resume'
		})

		.state('project', {
			url: '/projects',
			templateUrl: '/views/project.html',
			controller: 'ProjectCtrl',
			controllerAs: 'project',
			activeTab: 'project'
		})

		.state('article', {
			url: '/articles',
			templateUrl: '/views/article.html',
			controller: 'ArticleCtrl',
			controllerAs: 'article',
			activeTab: 'article'
		})

		.state('contact', {
			url: '/contact',
			templateUrl: '/views/contact.html',
			controller: 'ContactCtrl',
			controllerAs: 'contact',
			activeTab: 'contact'
		})
		
	$urlRouterProvider.otherwise('/');
}]);