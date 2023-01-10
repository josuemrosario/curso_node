//aula 25
//cria conexao com o banco

//aula 27 movido para este modulo
//aula 32 criado wrapper commMySQL para evitar que o consign abra a conexão 
// com o banco quando iniciar a aplicacao (autoload)


var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão com o banco estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias'
    });
}


module.exports = function (){
    console.log('Autoload - Carregamento do modulo de conexao com o BD');
    return connMySQL;
}