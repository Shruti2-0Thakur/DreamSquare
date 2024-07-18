const { createPool } = require('mysql');

const pool = createPool({
    port: process.env.DB_PORT || 3306,
    host: process.env.DB_HOST || 'bxp1iazaditltxzoz097-mysql.services.clever-cloud.com',
    user: process.env.DB_USER || 'uz4t6jvvhry3wmwi',
    password: process.env.DB_PASS || 'Wa7UBbIXEsiqZpCoKssw',
    database: process.env.MYSQL_DB || 'bxp1iazaditltxzoz097',
    connectionLimit: 10 // This sets the maximum number of connections in the pool
});

module.exports = pool;
