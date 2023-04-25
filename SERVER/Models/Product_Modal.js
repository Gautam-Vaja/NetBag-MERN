const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Product Name is Required"]
    },
    description: {
        type: String,
        required: [true, "Product Description is Required"]
    },
    price: {
        type: Number,
        required: [true, "Product Price is Required"]
    },
    rattings: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    category: {
        type: String,
        required: [true, "Enter Product Category"]
    },
    tags: {
        type: String,
        default: "General"
    },
    stock: {
        type: Number,
        required: [true, "Enter Product Stock"],
        maxlength: ["7", "Stock Can Not Exceed 7 Numbers"]
    },
    numofreviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        ratting: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Products = mongoose.model("product", ProductSchema)
module.exports = Products