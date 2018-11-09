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

	$http.get('/v1/pedido')
		.success(function(pedido) {
		$scope.pedido = pedido;
		$scope.idPedido = {};
		$scope.idStatus = {};
		$scope.logomarca = {};
		$scope.date = new Date();

		if($routeParams.idPedido) {
			$scope.idPedido = $routeParams.idPedido;
			filtraStatusPedido($scope.idPedido);
		}
	})
	.error(function(erro) {
		console.log(erro);
	});

	function filtraStatusPedido(idPedido){
		var pedido = $scope.statusPorPedido;
	    for(var i = 0; i < pedido.length; i++){
            if(pedido[i].idPedido == parseInt(idPedido)){
                $scope.idStatus = pedido[i].cdStatus;
                $scope.logomarca = pedido[i].logomarca;
	        }
	    }
	}

});


