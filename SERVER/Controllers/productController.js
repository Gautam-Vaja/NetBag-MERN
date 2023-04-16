const Products = require("../Models/Products_Model")
const ApiFeatures = require("../Utils/ApiFeatures")
const ErrorHandler = require("../Utils/ErrorHandler")
const AsyncErrors = require("../middleware/AsyncErrors")


exports.GetAllProducts = AsyncErrors(async (req, res) => {
    const ProductCount = await Products.countDocuments()
    const resultPerPage = 5 
    const apiFeature = new ApiFeatures(Products.find(), req.query).search().filter().pagination(resultPerPage)
    const product = await apiFeature.query;
    res.status(200).json({ success: true, product, ProductCount })
})

// Create Product --- ADMIN ONLY--
exports.CreateProduct = AsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id
    const product = await Products.create(req.body)
    res.status(201).json({
        success: true,
        message: "Inserted Successfully",
        product
    })
}
)




// Update Product  --ADMIN ONLY--
exports.UpdateProduct = AsyncErrors(async (req, res, next) => {

    let product = await Products.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler(404, "Product Not Found"))
    }
    else {
        product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ success: true, message: "Product Update Success", product })
    }

})

// Delete Product  --ADMIN ONLY--
exports.DeleteProduct = AsyncErrors(async (req, res, next) => {

    const product = await Products.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler(404, "Product Not Found"))
    } else {
        const product = await Products.findByIdAndDelete(req.params.id)
        res.status(200).json({ success: true, message: "Product Deleted Successfully" })
    }
}
)


exports.GetProductDetail = AsyncErrors(async (req, res, next) => {
    const product = await Products.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler(404, "Product Not Found"))
    } else {
        res.status(200).json({ success: true, product })
    }

})
