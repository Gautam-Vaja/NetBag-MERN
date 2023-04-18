const express = require("express")
const router = express.Router()
const { GetAllProducts, CreateProduct, UpdateProduct, DeleteProduct, GetProductDetail, CreateProductReview, DeleteReview, GetProductReviews, } = require("../Controllers/productController")
const { AuthenticatedUser, AuthoriseRole } = require("../middleware/Authentication")

router.route("/").get(GetAllProducts)
router.route("/").post(AuthenticatedUser, AuthoriseRole("admin"), CreateProduct)
router.route("/review").put(AuthenticatedUser, CreateProductReview)
router.route("/:id").put(AuthenticatedUser, AuthoriseRole("admin"), UpdateProduct)
router.route("/reviews").get(GetProductReviews).delete(AuthenticatedUser, DeleteReview)
router.route("/:id").delete(AuthenticatedUser, AuthoriseRole("admin"), DeleteProduct)
router.route("/:id").get(GetProductDetail)

module.exports = router 