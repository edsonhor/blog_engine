var mysql = require('mysql');
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'application',
  password : 'password',
  database : 'blogengine'
});

module.exports=pool;