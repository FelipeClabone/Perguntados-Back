import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "db",
    user: "root",
    password: "12345",
    database: "perguntados_db",

});