const express = require("express")
const { GetAllProducts, CreateProduct } = require("../Controllers/productController")
const router = express.Router()

router.route("/products").get(GetAllProducts)
router.route("/products/new").post(CreateProduct)
router.route("/products/update/:id").post(CreateProduct)

module.exports = router