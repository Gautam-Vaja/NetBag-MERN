const express = require("express")
const dotenv = require("dotenv")
const ConnectToMongo = require("./config/db")
const app = express()
dotenv.config({ path: "./config/config.env" })
const port = process.env.PORT
app.use(express.json())
app.use("/api/v1", require("./Routes/ProductRoute"))
ConnectToMongo()


app.listen(port, () => {
    console.log(`NetBag Application Running on http://localhost:${port}`)
})
