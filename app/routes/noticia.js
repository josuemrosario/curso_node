// Rota criada na aula 33
module.exports = function(app){

    app.get('/noticia',function(req,res){
  
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel; //aula 34

        // aula 34 select foi tranferido para getnoticia() no modelo noticiaModel.js
        //connection.query('select * from noticias where id_noticia = 2',function(erro,result){
        //    res.render("noticias/noticia", {noticia : result});
        //});

        noticiasModel.getNoticia(connection,function(erro,result){
            res.render("noticias/noticia", {noticia : result});
        });

    });
};