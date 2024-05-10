create database db;
use db;
create table clothes (
    category char(50),
    product char(50),
    price int,
    sale boolean,
    stock int
);
insert into clothes values
    ("ワンピース", "花柄ワンピース", 10000, 0, 23),
    ("ワンピース", "水色ワンピース", 8000, 0, 19),
    ("ワンピース", "ストライプワンピース", 8000, 0, 58),
    ("ワンピース", "ロングワンピース", 12000, 0, 32),
    ("ワンピース", "水玉ワンピース", 2000, 1, 10),
    ("Tシャツ", "白シャツ", 0, 0, 1000);

create table users (
    id INT(4) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username char(50),
    password char(50)
);
insert into users (username, password) values
    ("nilfigo", "5puXi3S2"),
    ("r1154n", "password123"),
    ("y0d3n", "dtwXV5aB");

create table flag (
    secretflag char(50)
);
insert into flag values ("flag{0n3_P13c3}"); 

GRANT SELECT ON *.* TO 'y0d3n'@'%';