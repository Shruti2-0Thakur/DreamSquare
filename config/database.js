const {createPool}= require('mysql');

const { createConnection} = require("mysql");
const pool = createConnection({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB
    
})
module.exports=pool;