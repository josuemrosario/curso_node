var http = require('http');

// Aula 8 - Servidor basico de resposta
var server = http.createServer( function(req,res){

    var categoria = req.url;
    console.log(categoria)

    // Aula 9 - Configurando Rotas manualmente
    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias de Tecnologia</body></html>"); 
    }else if (categoria == '/moda'){
        res.end("<html><body>Noticias de Moda</body></html>"); 
    }else if (categoria == '/beleza'){
        res.end("<html><body>Noticias de Beleza</body></html>"); 
    }else {
        res.end("<html><body>Portal de Notícias</body></html>"); 
    }
    
});

server.listen(3000);