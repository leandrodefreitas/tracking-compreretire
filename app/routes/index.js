var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
	
    app.get('/v1/statusPorPedido', api.busca);
    
    app.get('/v1/status', api.listaStatus);

       
    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};