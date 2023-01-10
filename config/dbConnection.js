//aula 25
//cria conexao com o banco

//aula 27 movido para este modulo
var mysql = require('mysql');
module.exports = function (){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias'
    });
}