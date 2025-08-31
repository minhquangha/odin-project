const queries =  require( '../db/queries');
const bcrypts = require('bcryptjs');
async function loginControllers(username,password){
    try{
        const user = await queries.getUser(username);
        if(!user){
            res.send('username is not correct');
        }else{
            const match = await bcrypts.compare(password, user.password);
            if(match){
                return true;
            }
            return false;
        }

    }catch(error){
        console.log('error in loginController');
        throw error;
    }
}

module.exports=loginController;