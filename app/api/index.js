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
            texto: 'PAGAMENTO EFETUADO'
        },
        {
            _id: 3, 
            texto: 'PEDIDO EM SEPARAÇÃO'
        }, 
{
            _id: 4, 
            texto: 'PEDIDO PRONTO P/ RETIRADA'
        }, 
        { 
            _id: 5, 
            texto: 'PEDIDO RETIRADO',
        }
    ]);
        
};


module.exports = api;