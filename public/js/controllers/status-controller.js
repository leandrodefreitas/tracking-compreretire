angular.module('api-compreretire')
	.controller('StatusController', function($scope, $http, $routeParams){

	$scope.statusPorPedido = {};

	$http.get('/v1/statusPorPedido')
			.success(function(statusPorPedido) {
			$scope.statusPorPedido = statusPorPedido;
			console.log($scope.statusPorPedido);
		}).error(function(erro) {
			console.log(erro);
	});	

	$http.get('/v1/status')
		.success(function(status) {
		$scope.status = status;
		$scope.idPedido = {};
		$scope.idStatus = {};
		$scope.logomarca = {};
		$scope.date = new Date();

		if($routeParams.idPedido && $routeParams.logomarca) {
			$scope.idPedido = $routeParams.idPedido;
			$scope.idStatus = filtraStatusPedido($scope.idPedido);
			$scope.logomarca = $routeParams.logomarca;
		}
	})
	.error(function(erro) {
		console.log(erro);
	});

	function filtraStatusPedido(idPedido){
		var pedido = $scope.statusPorPedido;
	    for(var i = 0; i < pedido.length; i++){
            if(pedido[i].idPedido == parseInt(idPedido)){
                return pedido[i].cdStatus;
	        }
	    }
	}

});


