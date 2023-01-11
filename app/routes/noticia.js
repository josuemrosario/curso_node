// Rota criada na aula 33
module.exports = function(application){

    application.get('/noticia',function(req,res){
  
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection); //aula 34

        // aula 34 select foi tranferido para getnoticia() no modelo noticiaModel.js
        //connection.query('select * from noticias where id_noticia = 2',function(erro,result){
        //    res.render("noticias/noticia", {noticia : result});
        //});

        noticiasModel.getNoticia(function(erro,result){
            res.render("noticias/noticia", {noticia : result});
        });

    });
};