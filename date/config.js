const mysql = require('mysql');

//set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    datebase: 'api',
};
//create a MySQL pool
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;