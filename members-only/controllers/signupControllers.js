const bcrypts = require('bcryptjs');
const {insertUser}= require('../db/queries');
async function addUserController(fullname, username, password) {
    try {
        const hashPassword = await bcrypts.hash(password, 10);
        insertUser(fullname,username,hashPassword);
    } catch (error) {
        console.log(error);
    }
}
module.exports={addUserController};