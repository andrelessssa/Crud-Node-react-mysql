import mysql from "mysql";

export const db = mysql.createConnection({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "An0025322",
    database: "crud2"
});
