const {Pool} = require('pg');

const pool = new Pool({  
    user: 'postgres',
    host: 'roundhouse.proxy.rlwy.net',
    database: 'railway',
    password: '3Eg2d5gD*32E-eDabf-fEEbd*CeaGFEb',
    port: 57329,
});

module.exports = pool;