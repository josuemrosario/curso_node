var http = require('http');

// Aula 8 - Servidor basico de resposta
var server = http.createServer( function(req,res){
    res.end("<html><body>Portal de Notícias</body></html>"); // Resposta
});

server.listen(3000);