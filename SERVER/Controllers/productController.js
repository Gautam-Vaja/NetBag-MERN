const Products = require("../Models/Products_Model")
const ApiFeatures = require("../Utils/ApiFeatures")
const ErrorHandler = require("../Utils/ErrorHandler")
const AsyncErrors = require("../middleware/AsyncErrors")


exports.GetAllProducts = AsyncErrors(async (req, res, next) => {
    const resultPerPage = 20
    const apiFeature = new ApiFeatures(Products.find(), req.query).search().filter().pagination(resultPerPage)
    const product = await apiFeature.query;
    const ProductCount = await product.length
    res.status(200).json({ success: true, product, ProductCount, resultPerPage })
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
        product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
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

exports.CreateProductReview = AsyncErrors(async (req, res, next) => {
    const { ratting, comment, ProductId } = req.body
    const review = {
        user: req.user._id,
        name: req.user.name,
        ratting: Number(ratting),
        comment
    }

    const product = await Products.findById(ProductId)
    if (!product) { return next(new ErrorHandler(404, "Product Not Found")) }
    const isReviewed = product.reviews.find((rev) => rev.user.toString() === req.user._id.toString())
    if (isReviewed) {
        product.reviews.forEach(rev => {
            if (rev.user.toString() === req.user._id.toString()) {
                rev.ratting = ratting,
                    rev.comment = comment
            }
        })
    }
    else {
        product.reviews.push(review)
        product.numofreviews = product.reviews.length
    }
    let avg = 0
    product.reviews.forEach((rev) => {
        avg += rev.ratting
    })
    product.rattings = avg / product.reviews.length
    await product.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true
    })
})

exports.GetProductReviews = AsyncErrors(async (req, res, next) => {

    const product = await Products.findById(req.query.ProductId)
    if (!product) { return next(new ErrorHandler("404", "Product Not Found")) }
    res.status(200).json({
        success: true,
        reviews: product.reviews
    })

})

exports.DeleteReview = AsyncErrors(async (req, res, next) => {

    const product = await Products.findById(req.query.ProductId)
    if (!product) { return next(new ErrorHandler("404", "Product Not Found")) }
    const reviews = product.reviews.filter((rev) => { rev._id.toString() !== req.query.id.toString() })
    let avg = 0
    reviews.forEach((rev) => {
        avg += rev.ratting
    })
    numofreviews = product.reviews.length
    rattings = avg / numofreviews
    await Products.findByIdAndUpdate(req.query.ProductId, { reviews, numofreviews, rattings }, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        success: true
    })
})

