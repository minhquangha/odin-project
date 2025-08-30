const pool = require('./pool');

async function insertUser(fullname, username, password) {
    try {
        const SQL = 'insert into members (fullname,username,password) values ($1,$2,$3)';
        const values = [fullname, username, password];
        await pool.query(SQL, values);
        console.log('add user successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports= {insertUser};
