const Orders = require("../Models/Order_Model")
const Products = require("../Models/Products_Model")
const Users = require("../Models/User_Model")
const ApiFeatures = require("../Utils/ApiFeatures")
const ErrorHandler = require("../Utils/ErrorHandler")
const AsyncErrors = require("../middleware/AsyncErrors")

// Create New Order
exports.NewOrder = AsyncErrors(async (req, res, next) => {
        const { shippingInfo, orderItems, paymentInfo, itemPrice, taxPrice, shippingPrice, totalPrice } = req.body
        const order = await Orders.create({
                shippingInfo, orderItems, paymentInfo, itemPrice, taxPrice, shippingPrice, totalPrice,
                paidAt: Date.now(), user: req.user._id
        })
        await order.save()
        res.status(200).json({
                success: true,
                order
        })
})


// Get Single Order 

exports.GetSingleOrder = AsyncErrors(async (req, res, next) => {
        const order = await Orders.findById(req.params.id).populate("user", "name , email ")
        if (!order) { return next(new ErrorHandler(404, "Order Not Found")) }
        res.status(200).json({
                success: true,
                order
        })
})

// All Orders -- LoggedIn User 
exports.MyOrders = AsyncErrors(async (req, res, next) => {
        const order = await Orders.find({ user: req.user._id })
        const TotalOrders = await Orders.find({ user: req.user._id }).countDocuments()
        if (!order) { return next(new ErrorHandler(404, "No Any Orders Found")) }
        res.status(200).json({
                success: true,
                order,
                TotalOrders
        })
})

// Get All Orders --Admin
exports.GetAllOrders = AsyncErrors(async (req, res, next) => {

        const orders = await Orders.find()
        let TotalAmount = 0
        orders.forEach((order) => {
                TotalAmount += order.totalPrice
        })
        res.status(200).json({
                status: 200,
                TotalAmount,
                orders
        })
})

// Update Orders Status
exports.GetAllOrders = AsyncErrors(async (req, res, next) => {

        const orders = await Orders.findById(req.params.id)
        if (orders.orderStatus === "Delivered") {
                return next(new ErrorHandler(404, "You Have Already Delivered This Order"))
        }
        res.status(200).json({
                status: 200,
                TotalAmount,
                orders
        })
})


// Update Order Status

exports.UpdateOrder = AsyncErrors(async (req, res, next) => {

        const order = await Orders.findById(req.params.id)
        if (!order) { return next(new ErrorHandler(404, "Order Not Found")) }

        order.orderStatus = req.body.orderStatus
        if (req.body.orderStatus === "Delivered") {
                order.deliveredAt = Date.now()
        }
        order.orderItems.forEach(async (order) => {
                await UpdateStock(order.product, order.quantity)
        });
        await order.save({ validateBeforeSave: false })
        res.status(200).json({
                success: true,
        })
})

async function UpdateStock(ProductId, Quantity) {
        const product = await Products.findById(ProductId)
        if (!product) { return next(new ErrorHandler(404, "Product Not Found")) }
        product.stock -= Quantity
        product.save({ validateBeforeSave: false })
}

exports.DeleteOrder = AsyncErrors(async (req, res, next) => {
        const order = await Orders.findByIdAndDelete(req.params.id)
        if (!order) { return next(new ErrorHandler(404, "Order Not Found")) }
        res.status(200).json({
                success: true,
        })
})