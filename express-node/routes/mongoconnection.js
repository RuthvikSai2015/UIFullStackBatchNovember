let mongoClient = require('mongodb').MongoClient;
const dbUrl ="mongodb://localhost:27017/usersDatabase";

mongoClient.connect(dbUrl,(error,databaseAck)=> {
    console.log("Database has been created");
})