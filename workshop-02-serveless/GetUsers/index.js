const mongodb = require('../Shared/mongodb');

module.exports = async function (context, req) {
    const { db, connection } = await mongodb();

    try {

        const users = await db.collection('users').find().limit(20).toArray();
        connection.close();

        context.log(users);
        context.log(typeof users);
        context.res = {
            body: users,
            headers: {
                'Content-Type': 'application/json'
            }
        };

    } catch (error) {
        context.res = {
            status: 500,
            body: 'Error ao criar usuário',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
};