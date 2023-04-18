const express = require("express")
const router = express.Router()
const { AuthenticatedUser, AuthoriseRole } = require("../middleware/Authentication")
const { NewOrder, GetSingleOrder, MyOrders } = require("../Controllers/orderController")


router.route("/").get(AuthenticatedUser, MyOrders)
router.route("/new").post(AuthenticatedUser, NewOrder)
router.route("/:id").get(AuthenticatedUser, AuthoriseRole("admin"), GetSingleOrder)


module.exports = router