;(function() {
	'use strict';

	angular.module('boilerplate')
		.controller('ListController' ,ListController);

	ListController.$inject = ['$scope'];

	function ListController($scope) {
		$scope.libs = ['NodeJS', 'AngularJS', 'GulpJS', 'Bower', 'jQuery', 'Bootstrap', 'font-awesome'];
	}
})();
