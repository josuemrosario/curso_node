
var dbConnection = require('../../config/dbConnection'); //aula 27

module.exports = function(app){
    
    var connection = dbConnection(); //aula 27
    
    //administra a rota
    app.get('/noticias',function(req,res){
        
        //aula 27 movido conexão com o banco para o arquivo dbConnection
    
        connection.query('select * from noticias',function(erro,result){
            //res.send(result);

            //aula 26
            res.render("noticias/noticias", {noticias : result})
        });

        //res.render("noticias/noticias") //renderiza uma view
    });
};