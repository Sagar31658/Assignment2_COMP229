const express = require('express');
const router = express.Router();

const prodcutsController = require('../controllers/productsController')

router.get('/',prodcutsController.getHomePage)

router.get('/products', prodcutsController.getAllProducts)

router.get('/products/:id', prodcutsController.getSpecifiedProduct)

router.post('/products',prodcutsController.postProduct)

router.put('/products/:id',prodcutsController.editProduct)

router.delete('/products/:id', prodcutsController.deleteProduct)

router.delete('/products',prodcutsController.deleteAllProduct)

router.get('/products?name=[kw]',prodcutsController.getProductBySearch)


module.exports = router