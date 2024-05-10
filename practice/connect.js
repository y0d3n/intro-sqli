const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "db",
  user: "y0d3n",
  password: "passwd",
  database: "db",
});

conn.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL: ", error);
    return;
  }
  console.log("Success connecting to MySQL");
});

exports.conn = conn;
