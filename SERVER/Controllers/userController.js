const User = require("../Models/User_Model")
const ErrorHandler = require("../Utils/ErrorHandler")
const { sendToken } = require("../Utils/SetCookieToken")
const AsyncErrors = require("../middleware/AsyncErrors")

// Register User

exports.RegisterUser = AsyncErrors(async (req, res, next) => {
        const { name, email, password } = req.body

        const user = await User.create({
                name, email, password, avatar: {
                        public_id: "this is sample id",
                        url: "sample url"
                }
        })
        sendToken(user, 201, res)
})

//Login User 

exports.LoginUser = AsyncErrors(async (req, res, next) => {

        const { email, password } = req.body
        if (!email || !password) {
                return next(new ErrorHandler(401, "Invalid Credentials"))
        }

        const user = await User.findOne({ email }).select("+password")
        if (!user) { return next(new ErrorHandler(401, "Invalid Credentials")) }

        const IsPasswordMatched = await user.comparePassword(password)
        if (!IsPasswordMatched) { return next(new ErrorHandler(401, "Invalid Credentials")) }

        sendToken(user, 200, res)
})

exports.Logout = AsyncErrors(async (req, res, next) => {
        res.cookie("token", null, {
                expire: new Date(Date.now()),
                httpOnly: true
        })

        res.status(200).json({
                success: true,
                message: "Logging Out Successfully"
        })
})