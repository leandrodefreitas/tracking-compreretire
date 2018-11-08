angular.module('api-compreretire')
	.controller('StatusController', function($scope, $http, $routeParams){

		$http.get('/v1/status')
			.success(function(status) {
			$scope.status = status;
			$scope.idPedido = {};
			$scope.idStatus = {};
			$scope.logomarca = {};
			$scope.date = new Date();

			if($routeParams.idStatus && $routeParams.idStatus && $routeParams.logomarca) {
				$scope.idPedido = $routeParams.idPedido;
				$scope.idStatus = $routeParams.idStatus;
				$scope.logomarca = $routeParams.logomarca;
			}
		})
		.error(function(erro) {
			console.log(erro);
		});
	});


