const Product = require('../models/Product')
const Category = require('../models/Category')

exports.getHomePage = (req,res) => {
    res.json({'message':"Welcome to DressStore Application."})
}

exports.getAllProducts = (req,res) => {
    Product.find().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
    })
}

exports.getSpecifiedProduct = (req,res) => {
    Product.findOne({_id:req.params.id}).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err)
    })
}

exports.postProduct = (req,res) => {
    let name = req.body.name;
    let description = req.body.description;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let category = req.body.category;

    console.log(req.body)

    const product = new Product({
        name: name,
        description:description,
        price:price,
        quantity:quantity,
        category:category 
    }).save().then(()=> {
        console.log(product)
        res.redirect('/api/products');
    }).catch(err => console.log(err));
}

exports.editProduct = (req,res) => {
    let name = req.body.name;
    let description = req.body.description;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let category = req.body.category

    Product.findOne({_id:req.params.id}).then(product => {
        product.name = name;
        product.description = description
        product.price = price
        product.quantity = quantity
        product.category = category

        return product.save().then(result => {
            console.log('UPDATED PRODUCT!');
            res.redirect('/api/products');
        });
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteProduct = (req,res) => {
    Product.deleteOne({"_id":req.params.id}).then(msg => {
        console.log({msg})
        res.redirect('/api/products')
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteAllProduct = (req,res) => {
    Product.deleteMany({}).then(msg => {
        console.log({msg})
        res.redirect('/api/products')
    }).catch(err => {
        console.log(err)
    })
}

exports.getProductBySearch = (req,res) => {
    Product.findOne({"name" : req.params.name}).then(data => {
        res.json({data})
    }).catch(err => {
        console.log(err)
    })
}

