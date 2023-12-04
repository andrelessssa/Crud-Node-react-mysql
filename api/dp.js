
import mysql from "mysql";

export const db = mysql.createConnection({
  
  host: "localhost",
  user: "root",
  password: "An0025322",
  database: "crud2"
});
