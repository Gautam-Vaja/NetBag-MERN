const express = require("express")
const { AuthenticatedUser, AuthoriseRole } = require("../middleware/Authentication")
const { RegisterUser, LoginUser, Logout, ForgotPassword, ResetPassword, GetDetailsUser, UpdatePassword, UpdateProfile, GetAllUsers, GetSingleUser, UpdateUserRole, DeleteUser } = require("../Controllers/userController")
const router = express.Router()

router.route("/register").post(RegisterUser)
router.route("/signin").post(LoginUser)
router.route("/password/forgot").post(ForgotPassword)
router.route("/password/reset/:token").put(ResetPassword)
router.route("/logout").get(Logout)
router.route("/me").get(AuthenticatedUser, GetDetailsUser)
router.route("/updatepassword").put(AuthenticatedUser, UpdatePassword)
router.route("/me/update").put(AuthenticatedUser, UpdateProfile)
router.route("/admin/users").get(AuthenticatedUser, AuthoriseRole("admin"), GetAllUsers)
router.route("/admin/users/:id").get(AuthenticatedUser, AuthoriseRole("admin"), GetSingleUser)
router.route("/admin/users/:id").put(AuthenticatedUser, AuthoriseRole("admin"), UpdateUserRole)
router.route("/admin/users/:id").delete(AuthenticatedUser, AuthoriseRole("admin"), DeleteUser)


module.exports = router 