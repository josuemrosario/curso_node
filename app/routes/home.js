module.exports = function(app){

    app.get('/',function(req,res){
        
        //res.send("<html><body>Noticias de Tecnologia</body></html>");
        
        res.render("home/index") //renderiza uma view
    });

};