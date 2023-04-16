const express = require("express")
const { GetAllProducts, CreateProduct, UpdateProduct, DeleteProduct, GetProductDetail, } = require("../Controllers/productController")
const { AuthenticatedUser, AuthoriseRole } = require("../middleware/Authentication")
const router = express.Router()

router.route("/").get(AuthenticatedUser, AuthoriseRole('admin'), GetAllProducts)
router.route("/").post(AuthenticatedUser, CreateProduct)
router.route("/:id").put(AuthenticatedUser, UpdateProduct)
router.route("/:id").delete(AuthenticatedUser, DeleteProduct)
router.route("/:id").get(GetProductDetail)

module.exports = router 