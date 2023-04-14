const mongoose = require("mongoose")
const ConnectToMongo = async () => {
    try {
        const result = await mongoose.connect(process.env.DB_URI)
        console.log("MongoDb connected")

    } catch (error) {
        console.log("MongoDB Not Connected : ")
    }
}
module.exports = ConnectToMongo