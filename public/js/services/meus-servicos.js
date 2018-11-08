angular.module('meusServicos', ['ngResource'])
	.factory('recursoPedido', function($resource) {

		return $resource('/v1/status', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	});