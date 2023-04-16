const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const ConnectToMongo = require("./config/db")
const Error = require("./middleware/Error")
dotenv.config({ path: "./config/config.env" })
const port = process.env.PORT
const app = express()
ConnectToMongo()

// Handlaling Uncaught Exceptoion
process.on("uncaughtException", (error) => {
    console.log(error.message)
    console.log("Internal Server Error \nServer Shutting-Down Emergency  ")
    process.exit(true)

})

app.use(express.json())
app.use(Error)
app.use(cookieParser())

app.use("/api/v1/products", require("./Routes/ProductRoute"))
app.use("/api/v1/user", require("./Routes/UserRoute"))


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