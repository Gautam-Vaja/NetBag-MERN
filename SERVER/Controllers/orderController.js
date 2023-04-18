const Orders = require("../Models/Order_Model")
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
        const order = await Orders.findById(req.params.id).populate("user" , "name , email ")
        if (!order) { return next(new ErrorHandler(404, "Order Not Found")) }
        res.status(200).json({
                success: true,
                order
        })
})

// All Orders Login users
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

