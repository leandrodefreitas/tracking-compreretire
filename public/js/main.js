angular.module('api-compreretire', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/pedido/:idPedido', {
			templateUrl: 'partials/principal.html',
			controller: 'StatusController'
		});

		$routeProvider.otherwise({redirectTo: '/pedido'});

	});