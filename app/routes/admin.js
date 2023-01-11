module.exports = function(application){

    application.get('/formulario_inclusao_noticia',function(req,res){
        //aula 48 logica de renderização passou para o controller
        application.app.controllers.admin.formulario_inclusao_noticia(application,req,res);
    });

    //aula 39
    application.post('/noticias/salvar',function(req,res){
        //aula 48 logica de renderização passou para o controller
        application.app.controllers.admin.noticias_salvar(application,req,res);        
    });
};    