const { MongoClient } = require('mongodb');

async function createConnection() {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  });
  const db = connection.db('test');
  return {
    connection,
    db
  }
}

module.exports = createConnection;