// )+ Mysql module
const mysql = require('mysql');

// )+ Initialize connection
var conn = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: 'Nazeh@503',   
  database: 'Alsharkia_Healthcare'
}); 
// )+ Execute connection
conn.connect(function(err) {
  // # Creare db alsharqiaHealth
  // conn.query("create database alsharqiaHealth");
  // # error connection
  if ( err ) {
    throw err;
  } 
  // # success connection
  console.log('Database is connected successfully !');
});
module.exports = conn;