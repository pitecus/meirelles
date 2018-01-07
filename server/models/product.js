const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  description: String,
  prices: [{
    date: {
      default: Date.now,
      type: Date
    },
    price: Number
  }]
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
