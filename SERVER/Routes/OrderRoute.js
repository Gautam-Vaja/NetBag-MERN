const express = require("express")
const router = express.Router()
const { AuthenticatedUser, AuthoriseRole } = require("../middleware/Authentication")
const { NewOrder, GetSingleOrder, MyOrders, UpdateOrder, GetAllOrders, DeleteOrder } = require("../Controllers/orderController")


router.route("/").get(AuthenticatedUser, MyOrders)
router.route("/new").post(AuthenticatedUser, NewOrder)
router.route("/:id").get(AuthenticatedUser, AuthoriseRole("admin"), GetSingleOrder)
router.route("/admin/orders").get(AuthenticatedUser, AuthoriseRole("admin"), GetAllOrders)



router.route("/admin/orders/:id").put(AuthenticatedUser, AuthoriseRole("admin"), UpdateOrder)
router.route("/:id").delete(AuthenticatedUser, DeleteOrder)


module.exports = router