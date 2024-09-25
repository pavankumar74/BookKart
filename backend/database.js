const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pavan@2003",
  database: "book",
});

module.exports = connection;
