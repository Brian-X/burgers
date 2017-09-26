// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3200,
//   host: "intense-coast-15371",
//   user: "jawsdb-rigid-90952",
//   password: "",
//   database: "mysql://x326bzjzpcfr3q3e:pp746psu14umy0yq@xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vb6lbc0w8uwajlsz"
// });

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
