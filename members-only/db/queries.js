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
async function getUser(username){
    try{
        const SQL =  'select username from members where members.username = $1';
        const value = [username];
        const data = await pool.query(SQL,value);
        return data;
    }catch(error){
        console.log(' cannot find username');
        throw error;
    }
}

module.exports= {insertUser,getUser};
