'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  manufactor: String,
  price: Number,
  img: String,
  info: String,
  advantages: Array,
  gramsPerDay: Array,
  ingrediants: Array,
  nutrition: Array,
  sale: {
    type: Boolean,
    default: false
  }
});

ProductSchema.set('toJSON', {
   virtuals: true
});

/**
 * Virtuals
 */
ProductSchema
.virtual('salePrice')
.get(function() {
  if (this.sale)
    return (90 / 100) * this.price;
  return this.price;
});

ProductSchema
.virtual('savedAmount')
.get(function() {
  if (this.sale)
    return (10 / 100) * this.price;
  return 0;
});

ProductSchema
.virtual('shortInfo')
.get(function() {
  return {
    id: this.id,
    name: this.name,
    sale: this.sale,
    salePrice: this.salePrice,
    img: this.img
  }
});

module.exports = mongoose.model('Product', ProductSchema);
