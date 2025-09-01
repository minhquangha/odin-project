const queries = require('../db/queries');
async function createMessage(id, content) {
    try {
        await queries.createMessages(id, content);
    } catch (error) {
        console.log(' cannot create');
        throw error;
    }
}
module.exports= createMessage;
