const {Pool} = require('pg');
module.exports= new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'top_users',
    password: 30082005,
    port:5432
})