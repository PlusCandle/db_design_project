const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();
const { HOST, USER, PASSWORD, DATABASE} = process.dotenv;

const dbmsConfig = {
    connectionLimit : 5,
    host : HOST,
    user : USER,
    password : PASSWORD,
    database : DATABASE
};

const dbConnPool = mysql.createPool(dbmsConfig);

module.exports = dbConnPool;