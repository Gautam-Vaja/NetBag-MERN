const ErrorHandler = require("../Utils/ErrorHandler")

module.exports = (err, req, res, next) => {

        err.statusCode = err.statusCode || 500
        err.message = err.message || "Internal Server Error"

        if (err.name === "CastError") {
                err = new ErrorHandler(400, `Resource Not Found \nInvalid : ${err.path}`)
        }

        res.status(err.statusCode).json({
                success: false,
                message: err.message,
        })
}