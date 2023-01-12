module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    
    noticiasModel.getNoticias(function(erro,result){
        res.render("noticias/noticias", {noticias : result});
    });
}

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    //Aula 56 - Ajusta para que o parametro passado por url chegue no model NoticiasDAO
    var id_noticia = req.query

    noticiasModel.getNoticia(id_noticia,function(erro,result){
        res.render("noticias/noticia", {noticia : result});
    });

}