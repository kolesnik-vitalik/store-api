const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'ZXC13790107',
    host: 'localhost',
    port: 5432,
    database: 'shop'
})

module.exports = pool
