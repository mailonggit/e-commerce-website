var Product = require('../models/product');
var mongoose = require('mongoose');
//connect to mongo
mongoose.connect("mongodb://localhost:27017/product", {useNewUrlParser: true, useUnifiedTopology: true});


var products = [
    new Product({
        imagePath: "https://media.vneconomy.vn/images/upload/2021/06/07/bitcoin-over-dollar.jpg",
        title: "Bit",        
        description: "Lord the the product",        
        price: 35000,            
    }),
    new Product({
        imagePath: "https://www.payvnn.com/wp-content/uploads/2018/02/ethereum-logo-1.png",
        title: "Etherium",        
        description: "Pricess the the product",        
        price: 2500,            
    }),
    new Product({
        imagePath: "https://assets.trustwalletapp.com/blockchains/binance/info/logo.png",
        title: "Binance",        
        description: "Son of CZ",        
        price: 3500,            
    }),
    new Product({
        imagePath: "https://assets.trustwalletapp.com/blockchains/binance/info/logo.png",
        title: "LINK",        
        description: "Son of CZ",        
        price: 25,            
    }),
    new Product({
        imagePath: "https://assets.trustwalletapp.com/blockchains/binance/info/logo.png",
        title: "LTC",        
        description: "Son of CZ",        
        price: 180,            
    }),
    new Product({
        imagePath: "https://assets.trustwalletapp.com/blockchains/binance/info/logo.png",
        title: "LUNA",        
        description: "Son of CZ",        
        price: 6,            
    }),
];

var done = 0;

for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done == products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
