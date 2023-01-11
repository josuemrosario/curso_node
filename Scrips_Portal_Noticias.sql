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
    
SELECT * FROM noticias;    

INSERT INTO noticias(titulo, noticia) 
	 VALUES ('Titulo da noticia','conteudo da noticia');

-- aula 25     
INSERT INTO noticias(titulo, noticia) 
	 VALUES ('Outra noticia','conteudo da outra noticia');   
     
-- Aula 45
ALTER TABLE noticias ADD COLUMN resumo varchar(100);
ALTER TABLE noticias ADD COLUMN autor varchar(30);
ALTER TABLE noticias ADD COLUMN data_noticia date;
