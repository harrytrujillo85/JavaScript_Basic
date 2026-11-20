create database ecommerce;
use ecommerce;

create table usuarios (
	-- atributo tipo_dato longitud_dato
    nombre_usuario varchar (20),
    apellidos_usuarios varchar (20),
    fecha_nacimiento_usuario date,
    email varchar (100),
    clave varchar (255)
);

insert into usuarios (nombre_usuario, apellidos_usuarios, email, clave) 
values ("Leonardo","D caprio","leonito@gmail.com","D caprio123");

insert into usuarios (nombre_usuario, apellidos_usuarios, email, clave) 
values 
("Leonardo","D caprio","leonito@gmail.com","D caprio123"),
("Harry","Trujillo","messi@gmail.com","messi123"),
("Token","Pirata", "token@gmail.com", "pirata123"),
("Carlos","Ocoro", "ocoro@gmail.com", "carlos123"),
("Sahur","Tuntun", "sahur@gmail.com", "sahur123");
    

select * from usuarios;