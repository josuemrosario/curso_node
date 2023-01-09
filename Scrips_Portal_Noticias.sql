/*================================================
// Projeto: Portal Noticias
// Description:  
//  - Scripts para criar as tabelas do portal de noticias
//  
==================================================*/

/*=======================================
// Criação do database e use
=======================================*/
CREATE DATABASE portal_noticias;
USE portal_noticias;
SHOW tables;

/*=======================================
// Tabela Noticias
=======================================*/
CREATE OR REPLACE TABLE noticias(
	id_noticia int not null primary key auto_increment,
    titulo varchar(100),
    noticia text,
    data_criacao timestamp default current_timestamp);
    
INSERT INTO noticias(titulo, noticia) 
	 VALUES ('Titulo da noticia','conteudo da noticia');

SELECT * FROM noticias;
    



