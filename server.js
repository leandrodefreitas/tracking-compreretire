var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

var port = process.env.PORT || 8080;    

http.createServer(app).listen(port, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

