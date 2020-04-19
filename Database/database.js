var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '4243',
    database : 'node'
});
module.exports = connection;
