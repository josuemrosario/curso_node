//Comentado na aula 32 - Modulo será importando pelo Consign( server.js)
//var dbConnection = require('../../config/dbConnection'); //aula 27

module.exports = function(application){
    //Comentado na aula 32
    //var connection = dbConnection(); //aula 27
    
    //trecho Comentado na aula 32
    //administra a rota
    //app.get('/noticias',function(req,res){
        
        //aula 27 movido conexão com o banco para o arquivo dbConnection
    
        //connection.query('select * from noticias',function(erro,result){
            //res.send(result);

            //aula 26
            //res.render("noticias/noticias", {noticias : result})
        //});

        //res.render("noticias/noticias") //renderiza uma view
    //});

    //Aula 32 nova implementação a partir do uso do consign
    application.get('/noticias',function(req,res){
  
        var connection = application.config.dbConnection();
        
        //comentado na aula 42
        //var noticiasModel = application.app.models.noticiasModel; //aula 34

        //42 passou a gerar a instancia noticiasModel
        var noticiasModel = new application.app.models.NoticiasDAO(connection);


        //implementação antiga . Alterada na aula 34. Query passou a ser feita no model
        //connection.query('select * from noticias',function(erro,result){
        //    res.render("noticias/noticias", {noticias : result});
        //});

        noticiasModel.getNoticias(function(erro,result){
            res.render("noticias/noticias", {noticias : result});
        });


    });
};