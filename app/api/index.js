var db = require('../../config/database');

var api = {}

api.listaStatus = function(req, res) {

    res.json([
        { 
            _id: 1, 
            texto : 'AGUARDANDO APROVAÇÃO DE CARTÃO'
        },

        {
            _id: 2, 
            texto: 'PAGAMENTO NÃO EFETIVADO'
        },

        {
            _id: 3, 
            texto: 'PAGAMENTO EFETUADO'
        },
        {
            _id: 4, 
            texto: 'PEDIDO EM SEPARAÇÃO'
        }, 
        {
            _id: 5, 
            texto: 'PEDIDO PRONTO P/ RETIRADA'
        }, 
        { 
            _id: 6, 
            texto: 'PEDIDO RETIRADO',
        }
    ]);
        
};

var jsonFile = require("jsonfile");
var filename = './app/api/file.json';
var jsonPedidos = {};

api.busca = function(req, res) {
    res.json(jsonPedidos);    
};

jsonFile.readFile(filename, function(err, jsonData){
    if(err) throw err;
    jsonPedidos = jsonData;
});

module.exports = api;