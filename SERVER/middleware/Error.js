const ErrorHandler = require("../Utils/ErrorHandler")

module.exports = (err, req, res, next) => {

        err.statusCode = err.statusCode || 500
        err.message = err.message || "Internal Server Error"

        if (err.name === "CastError") {
                err = new ErrorHandler(400, `Resource Not Found \nInvalid : ${err.path}`)
        }

        if (err.code === 11000) {
                err = new ErrorHandler(400, `Duplicate ${Object.keys(err.keyValue)} Entered `)
        }
        if (err.code === "JsonWebTokenError") {
                err = new ErrorHandler(400, `Invalid Json Web Token ,  Please Try Again  `)
        }
        if (err.code === "TokenExpiredError") {
                err = new ErrorHandler(400, `Token Is Expired ,  Please Try Again  `)
        }

        res.status(err.statusCode).json({
                success: false,
                message: err.message,
        })
}