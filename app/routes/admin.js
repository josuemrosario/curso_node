module.exports = function(application){

    application.get('/formulario_inclusao_noticia',function(req,res){
        res.render("admin/form_add_noticia") //renderiza uma view
    });

    //aula 39
    application.post('/noticias/salvar',function(req,res){
        
        var noticia = req.body;  //funciona apenas com body parser instalado
        //res.send(noticias);
        //res.render("admin/form_add_noticia") //renderiza uma view

        //aula 40
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;
        
        noticiasModel.salvarNoticia(noticia,connection,function(erro,result){
            //res.render("noticias/noticias", {noticias : result});
            //obs: render não funciona porque permite F5 que reenvia os dados e duplica no banco
            res.redirect('/noticias');
        })

    });
};    