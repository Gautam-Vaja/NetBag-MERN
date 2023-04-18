const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  brand: {
    type: String,
    required: [true, "Please Enter Product Brand Name"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
  },
  rattings: {
    type: Number,
    default: 0,
  },
  images: [{
    public_id: {
      type: String, required: true,
    },
    url: {
      type: String, required: true,
    }
  }],
  category: {
    type: String, required: [true, "Product Category Can't Be Blank"]
  },
  stock: {
    type: Number, required: [true, "Enter Stock Of Your Product"], maxlength: [10, "Stock Number Can Not Exceed 10 digits"]
  },
  tags: {
    type: String
  }
  ,
  numofreviews: {
    type: Number,
    default: 0
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: [true, "Reviewer Name Can Not be Blank"]
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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }




});

const Products = mongoose.model("product", ProductSchema)
module.exports = Products