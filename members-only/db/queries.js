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

async function findUserByUserName(username){
    const result = await pool.query("select * from members where username = $1 ",[username]);
    return result.rows[0];
}

async function findUserById(id){
    const user = await pool.query("select * from members where id=$1",[id]);
    return user.rows[0];
}

module.exports= {insertUser,findUserByUserName,findUserById};
