;(function() {

	'use strict';

	angular.module('boilerplate', [
		'ui.router',
		'ngStorage',
		'ngResource'
	])
	.config(config);

	// safe dependency injection
	// this prevents minification issues
	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {

		// Handles wrong and empty urls
		$urlRouterProvider.otherwise(function($injector, $location) {
			if ($location.path().length > 1) return '/404';
			else return '/home';
		});

		// Handles case-insensitive urls
		$urlRouterProvider.rule(function($injector, $location) {
			var path = $location.path();
			var normalized = path.toLowerCase();

			if (path !== normalized) {
				return normalized;
			}
		});

		// Handles Redirects
		$urlRouterProvider.when('/user', '/home');

		$stateProvider

			.state('404', {
				url: '/404',
				template: '<h1>404 Not Found</h1>'
			})

			.state('home', {
				url: '/home',
				templateUrl: 'views/partial-home.html'
			})
				.state('home.libs', {
					url: '/libs',
					templateUrl: 'views/partial-home-list.html',
					controller: 'ListController'
				})

				// nested list with just some random string data
				.state('home.usage', {
					url: '/usage',
					template: '<h4>Use this recipy to quickly start a production level development.<br>Also helpful for beginners who wish to understand the basic digest system of angularJS and how to accelerate the development and building tasks with task automation.<br><br>You are free to modify, distribute and sell.</h4>'
				})

			// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
			.state('about', {
				url: '/about',
				views: {
					'': {
						templateUrl: 'views/partial-about.html'
					},
					'columnOne@about': {
						template: '<p style="padding-top: 25px;">Those who are new to angularJS they must have a question in mind, "How to run the angular properly?"<br><br>Well, this tiny gulp tool built on NodeJS can run the angular source in the browser and watch for file changes while you are developing.<br>When you are deploying the project, you can just minify the source to prevent you source from being stolen as well as reduce the build size remarkably.</p>'
					},
					'columnTwo@about': { 
						templateUrl: 'views/table-data.html',
						controller: 'CommandController'
					}
				}
			});
	}



	/**
	 * Run block
	 * Runs first after launching
	 */
	angular.module('boilerplate')
		.run(run);

	run.$inject = ['$rootScope', '$state'];

	function run($rootScope, $state) {


	}


})();
