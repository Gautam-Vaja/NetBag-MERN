const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config({ path: __dirname + "\\config\\config.env" })
const ConnectToMongo = require("./config/db")
const Error = require("./middleware/Error")
const port = process.env.PORT || 8000
const app = express()
ConnectToMongo()

app.use(cookieParser());

console.log(process.env.COOKIE_EXPIRES)
// Handlaling Uncaught Exceptoion
process.on("uncaughtException", (error) => {
    console.log(error.message)
    console.log("Internal Server Error \nServer Shutting-Down Emergency  ")
    process.exit(true)

})

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(Error)




app.use("/api/v1/products", require("./Routes/ProductRoute"))
app.use("/api/v1/user", require("./Routes/UserRoute"))
app.use("/api/v1/order", require("./Routes/OrderRoute"))


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