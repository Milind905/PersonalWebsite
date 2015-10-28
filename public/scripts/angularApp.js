var app = angular.module('personalWebsite', ['mainRoutes', 'chart.js']);

app.config(['ChartJsProvider', function (ChartJsProvider) {
	// Configure all charts
	ChartJsProvider.setOptions({
	  colours: ['#0FA3FF', '#6FFF5C', '#FFE30F', '#6FFF5C'],
	  responsive: false
	});
}])