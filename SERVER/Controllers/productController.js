const Products = require("../Models/Products_Model")

exports.GetAllProducts = async (req, res) => {
    const product = await Products.find()
    res.status(200).json({ success: true, product })
}

// Create Product --- ADMIN ONLY--
exports.CreateProduct = async (req, res, next) => {

    const product = await Products.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

// Update Product  --ADMIN ONLY--
exports.UpdateProduct = async (req, res, next) => {

    let product = Products.findById(req.params.id)
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product Doesn't Exists"
        })
    }
    else {
        product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false })
        res.status(200).json({
            success: true,
            message: "Product Updated Successfully",
            product
        })
    }
}


