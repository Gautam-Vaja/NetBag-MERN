const express = require("express")
const router = express.Router()
const { getAllProducts, CreateProduct } = require("../Controller/ProductController");

router.route("/").get(getAllProducts)
router.route("/").post(CreateProduct)


module.exports = router
