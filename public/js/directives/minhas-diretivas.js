angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@',
            acao: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	}).directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive left-block" src="{{url}}" alt="{{titulo}}">';           
        
        return ddo;
    });