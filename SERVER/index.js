const express = require("express")
const dotenv = require("dotenv")
const ConnectToMongo = require("./config/db")
const Error = require("./middleware/Error")
dotenv.config({ path: "./config/config.env" })
const port = process.env.PORT
const app = express()

// Handlaling Uncaught Exceptoion
process.on("uncaughtException", (error) => {
    console.log(error.message)
    console.log("Internal Server Error \nServer Shutting-Down Emergency  ")
    process.exit(true)

})

app.use(express.json())
app.use(Error)
app.use("/api/v1", require("./Routes/ProductRoute"))
ConnectToMongo()


const server = app.listen(port, () => {
    console.log(`NetBag Application Running on http://localhost:${port}`)
})


// Unhandled Promise Rejection

process.on("unhandledRejection", (error) => {
    console.log("Internal Server Error \nServer Shutting-Down Emergency  ")
    console.log("Error : " + error.message)
    server.close(() => {
        process.exit(true)
    })
})