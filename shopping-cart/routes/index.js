var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Product = require('../models/product');

//homepage
router.get('/', function(req, res, next) {    
  Product.find(function(err, docs){
    res.render('shop/index', {title: 'Shopping Cart', products: docs});
    console.log("product 1: " + docs[0].title);
  }).lean()  
  .exec(function(error, body) {     
  });
});

router.get('/add-to-cart/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product){
    if(err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});
module.exports = router;