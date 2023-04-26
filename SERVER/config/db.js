const mongoose = require("mongoose")
const ConnectToMongo = async () => {

    const result = await mongoose.connect("mongodb://127.0.0.1:27017/NetBag", { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("connected")

}
module.exports = ConnectToMongo