const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const categorySchema = mongoose.Schema({
    name:String,
    products: {
        items: [
          {
            productId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Product',
            },
          }
        ]
    }
})

module.exports = mongoose.model('Category',categorySchema)