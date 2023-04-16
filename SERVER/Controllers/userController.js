const User = require("../Models/User_Model")
const ErrorHandler = require("../Utils/ErrorHandler")
const { sendToken } = require("../Utils/SetCookieToken")
const SendEmail = require("../Utils/SendEmail")
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


exports.ForgotPassword = AsyncErrors(async (req, res, next) => {
        const user = await User.findOne({ email: req.body.email })
        if (!user) { return next(new ErrorHandler(404, "Wrong Email Address")) }
        await user.save({ validateBeforeSave: false })
        const resetToken = await user.getResetPasswordToken()
        const resetPasswordURL = `${req.protocol}://${req.get("host")}/api/v1/user/password/reset/${resetToken}`
        const message = `Your Password Reset Token is \n\n ${resetPasswordURL}\n\n If you Have Not Requested This Email Then, Please Ignore It`
        try {
                await SendEmail({
                        email: user.email,
                        subject: `NetBag Account Password Recovery`,
                        message
                })
                res.status(200).json({
                        success: true,
                        message: `Email sent to ${user.email} successfully`
                })
        } catch (error) {
                user.resetPasswordToken = undefined
                user.resetPasswordExpire = undefined
                await user.save({ validateBeforeSave: false })
                next(new ErrorHandler(500, error.message))
        }
})