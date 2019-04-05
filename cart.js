const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema(

    {

       username: String,

       cart :any = [{
           image: String,
           title: String,
           price: Number,
           totalprice: Number
       }]
 

    }

);

var Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;