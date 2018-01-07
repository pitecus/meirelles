const express = require('express');
const Product = require('../models/Product');

// Create a router object.
const router = express.Router();

// Handle the query parameters.
router.param('id', (req, res, next, id) => {
  // Retrieve the product from database.
  Product.findById(id, (err, doc) => {
    // On error, return it.
    if (err) {
      return next(err);
    }

    // If not found.
    if (!doc) {
      err = new Error('Document not found');
      err.status = 404;
      return next(err);
    }

    // Store the product in the request to be processed later.
    req.product = doc;

    // Call the next in chain.
    return next();
  })
});

// List.
router.get('/', (req, res, next) => {
  Product.find({}).sort({description: -1}).exec((err, products) => {
    // On error, return it.
    if (err) {
      return next(err);
    }

    // Return a list of products.
    res.json(products);
  })
});

// Get.
router.get('/:id', (req, res) => {
  res.json(req.question);
});

// Post.
// router.post('/', (req, res) => {
//   const product = new Product(req.body);
//   product.save((err, dbProduct) => {
//     if (err) {
//       return next(err);
//     }

//     res.status(201);
//     res.json(dbProduct);
//   })
// });

// Export the routing.
module.exports = router;
