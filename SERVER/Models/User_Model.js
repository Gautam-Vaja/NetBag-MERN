const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
        name: {
                type: String, required: [true, "Please Enter Your Name"], maxlength: [30, "Name can not be exceed 30 charactors"],
                minlength: [2, "Name Should be More Than 2 Charactors"]
        },
        email: {
                type: String, required: [true, "Please Enter Your Email"], unique: true,
                validate: [validator.isEmail, "Please Enter a Valid Email Address"]
        },
        password: {
                type: String, required: [true, "Please Enter Your Password"],
                minlength: [8, "Password Should be 8 or More Charactors"], select: false
        },
        avatar: {
                public_id: {
                        type: String, required: true
                },
                url: {
                        type: String, required: true
                }
        },
        role: {
                type: String, default: "user "
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date

})

userSchema.pre("save", async function (next) {

        if (this.isModified("password")) {
                this.password = await bcrypt.hash(this.password, 12)
        } else {
                next();
        }
})

// JSON WEB TOKEN

userSchema.methods.getJwtToken = function () {
        const token = JWT.sign({ id: this._id }, process.env.JWT_SECRATE, {
                expiresIn: process.env.JWT_EXPIRE
        })
        return token
}

userSchema.methods.comparePassword = function (Enterdpassword) {
        const IsPasswordMatched = bcrypt.compare(Enterdpassword, this.password)
        return IsPasswordMatched;
}

const User = mongoose.model("user", userSchema)
module.exports = User