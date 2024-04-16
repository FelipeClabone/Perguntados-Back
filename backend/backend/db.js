import mysql from "mysql2"

//Criação da conexão
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud",

});