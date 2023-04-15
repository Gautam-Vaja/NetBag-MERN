const mongoose = require("mongoose")
const ConnectToMongo = async () => {

    const result = await mongoose.connect(process.env.DB_URI)
    console.log("MongoDb connected")

}
module.exports = ConnectToMongo