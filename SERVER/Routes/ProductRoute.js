const express = require("express")
const { GetAllProducts, CreateProduct, UpdateProduct, DeleteProduct, GetProductDetail, } = require("../Controllers/productController")
const router = express.Router()

router.route("/products").get(GetAllProducts)
router.route("/products/").post(CreateProduct)
router.route("/products/:id").put(UpdateProduct)
router.route("/products/:id").delete(DeleteProduct)
router.route("/products/:id").get(GetProductDetail)

module.exports = router