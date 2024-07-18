const { createPool } = require('mysql');

const pool = createPool({
    port: process.env.DB_PORT || 3306,
    host: process.env.DB_HOST || 'bly92g6wlvtvqdkvwkt7-mysql.services.clever-cloud.com',
    user: process.env.DB_USER || 'ufwycdipmnhuyf9d',
    password: process.env.DB_PASS || 'STYStxTPWOHKj6XTCP3Y',
    database: process.env.MYSQL_DB || 'bly92g6wlvtvqdkvwkt7',
    connectionLimit: 10 // This sets the maximum number of connections in the pool
});

module.exports = pool;
