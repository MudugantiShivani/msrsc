const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(

    {

       username: String,

       phonenumber:Number,

       email:String,

       password:String,

       address: String

 

    }

);

var User = mongoose.model("User", UserSchema);

module.exports = User;