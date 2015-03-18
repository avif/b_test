'use strict';

var _ = require('lodash');
var Product = require('./product.model');
var resultsPerPage = 9;

exports.getByPage = function(req, res) {
  var page = parseInt(req.params.page);
  if (isNaN(page))
    page = 1;
  var skip = 0;
  if (page>0)
    skip = page-1;
  Product
  .find({})
  .limit(resultsPerPage)
  .skip(resultsPerPage * skip)
  .exec(function (err, products) {
    if(err) { return handleError(res, err); }

    var slimProducts = [];
    _.each(products, function(product){
      slimProducts.push(product.shortInfo);
    });

    Product.count({})
    .exec(function(err, count) {
  		if (err) return res.send(500, err);

        res.json(200, {
          products: slimProducts,
          page: page,
          pages: Math.ceil(count / resultsPerPage)
        });
  	});
  });
};

exports.show = function(req, res) {
  Product.findById(req.params.id, function (err, product) {
    if(err) { return handleError(res, err); }
    if(!product) { return res.send(404); }
    return res.json(product);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
