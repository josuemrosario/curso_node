module.exports = function(app){
    //administra a rota
    app.get('/noticias',function(req,res){
        
        //aula 25
        //cria conexao com o banco
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'portal_noticias'
        });
    
        connection.query('select * from noticias',function(erro,result){
            //res.send(result);

            //aula 26
            res.render("noticias/noticias", {noticias : result})
        });

        //res.render("noticias/noticias") //renderiza uma view
    });
};