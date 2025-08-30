const {Pool} = require('pg');
module.exports= new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'postgres',
    password: '30082005',
    port:5432
})