module.exports.index = function(application,req,res){
    
    //aula 53
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.get5ultimasNoticias(function(erro,result){
        console.log('getultimas5noticias');
        console.log(result);
        console.log(erro);
        res.render("home/index",{noticias : result});
    });
    
    
}