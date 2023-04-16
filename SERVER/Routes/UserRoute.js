const express = require("express")
const { RegisterUser, LoginUser, Logout, ForgotPassword } = require("../Controllers/userController")
const router = express.Router()

router.route("/register").post(RegisterUser)
router.route("/signin").post(LoginUser)
router.route("/password/forgot").post(ForgotPassword)
router.route("/logout").get(Logout)

module.exports = router