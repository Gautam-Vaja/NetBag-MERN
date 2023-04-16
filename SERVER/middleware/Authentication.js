const User = require("../Models/User_Model");
const ErrorHandler = require("../Utils/ErrorHandler");
const AsyncErrors = require("./AsyncErrors");
const Jwt = require("jsonwebtoken")

exports.AuthenticatedUser = AsyncErrors(async (req, res, next) => {

        const { token } = req.cookies
        if (!token) {
                return next(new ErrorHandler(401, "Please Login To Access This Resource"))
        }

        const DecodeData = Jwt.verify(token, process.env.JWT_SECRATE)
        req.user = await User.findById(DecodeData.id)
        next()
})

exports.AuthoriseRole = (...role) => {
        return (req, res, next) => {
                if (!role.includes(req.user.role)) {
                        return next(new ErrorHandler(403, `${req.user.role} Is Not Allowed For Access This Feature`))
                } else {
                        next()
                }
        }
} 
