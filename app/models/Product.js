const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const ProductSchema = mongoose.Schema({
    name:String,
    description:String,
    price: Number,
    quantity:Number,
    category:String
})

module.exports = mongoose.model('Product',ProductSchema)