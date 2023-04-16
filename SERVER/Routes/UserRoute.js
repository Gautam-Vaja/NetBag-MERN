const express = require("express")
const { RegisterUser, LoginUser, Logout } = require("../Controllers/userController")
const router = express.Router()

router.route("/register").post(RegisterUser)
router.route("/signin").post(LoginUser)
router.route("/logout").get(Logout)

module.exports = router