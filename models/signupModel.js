const mongoose = require("mongoose")

const signupSchema = mongoose.Schema(
    {
        name:String,
        age:String,
        qualification:String,
        address:String,
        email:String,
        password:String

    }
)

module.exports = mongoose.model("signup",signupSchema)