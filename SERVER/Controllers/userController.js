const User = require("../Models/User_Model")
const ErrorHandler = require("../Utils/ErrorHandler")
const { sendToken } = require("../Utils/SetCookieToken")
const SendEmail = require("../Utils/SendEmail")
const AsyncErrors = require("../middleware/AsyncErrors")
const crypto = require("crypto")

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
        res.clearCookie("token");

        res.status(200).json({
                success: true,
                message: "Logging Out Successfully"
        })
})


exports.ForgotPassword = AsyncErrors(async (req, res, next) => {
        const user = await User.findOne({ email: req.body.email })
        if (!user) { return next(new ErrorHandler(404, "Wrong Email Address")) }
        const resetToken = await user.getResetPasswordToken()
        await user.save({ validateBeforeSave: false })
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


exports.ResetPassword = AsyncErrors(async (req, res, next) => {

        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")
        const user = await User.findOne({
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() }
        })
        if (!user) { return next(new ErrorHandler(404, "Invalid Reset Password Token  Or Has Been Expires")) }
        if (req.body.Password !== req.body.ConfirmPassword) { return next(new ErrorHandler(400, "Passwords Are Not Matched")) }

        user.password = req.body.Password
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save()

        sendToken(user, 200, res)

})

// Get User Details

exports.GetDetailsUser = AsyncErrors(async (req, res, next) => {
        const user = await User.findById(req.user.id)
        if (!user) { return next(ErrorHandler(404, "User Not Found")) }
        res.status(200).json({
                success: true,
                user
        })
})

exports.UpdatePassword = AsyncErrors(async (req, res, next) => {

        const user = await User.findById(req.user.id).select("+password")
        const IsPasswordMatched = await user.comparePassword(req.body.OldPassword)
        if (!IsPasswordMatched) { return next(new ErrorHandler(400, "Old Password Is Incorrect")) }
        if (req.body.NewPassword !== req.body.ConfirmNewPassword) { return next(new ErrorHandler(400, "Passwords Are Not Matched")) }
        user.password = req.body.NewPassword
        await user.save()
        sendToken(user, 200, res)
})

exports.UpdateProfile = AsyncErrors(async (req, res, next) => {

        const { name, email } = req.body
        console.log(name + ":" + email)
        const NewUserData = { name, email }
        const user = await User.findByIdAndUpdate(req.user.id, NewUserData,
                { new: true, runValidators: true, useFindAndModify: false })
        if (!user) { return next(new ErrorHandler(404, "User Not Found With Id is : " + res.user.id)) }
        res.status(200).json({
                success: true,
        })

})

exports.GetAllUsers = AsyncErrors(async (req, res, nexr) => {

        const users = await User.find()
        res.status(200).json({
                success: true,
                users
        })
})

exports.GetSingleUser = AsyncErrors(async (req, res, next) => {
        const user = await User.findById(req.params.id)
        if (!user) { return next(new ErrorHandler(404, `User Does not Exists With Id is : ${req.params.id}`)) }
        res.status(200).json({
                success: true,
                user
        })
})


exports.UpdateUserRole = AsyncErrors(async (req, res, next) => {
        const { name, email, role } = req.body
        const UpdatedProfile = { name, email, role }
        const user = await User.findByIdAndUpdate(req.params.id, UpdatedProfile,
                { new: true, runValidators: true, useFindAndModify: false })

        res.status(200).json({
                success: true,
        })
})

// Delete Profile -- Admin
exports.DeleteUser = AsyncErrors(async (req, res, next) => {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) { return next(new ErrorHandler(404, "User Not Found")) }
        res.status(200).json({
                success: true,
                message: "User Deleted Successfully"
        })
})