var mongoose = require('mongoose');

 var guestoruser = "guest"; 

mongoose.connect("mongodb://shanmukhsure:Ss9493679972@ds123675.mlab.com:23675/project", { useNewUrlParser: true });

 

var User = require('./user');

 

var Cart = require('./cart');

 

var db = mongoose.connection;

 

db.on('error', console.error.bind(console, 'connection error: '))

 

const express=require('express');

 

const bodyParser =require('body-parser');

 

const app=express();

 

app.use(bodyParser.json());

 

app.all("/*", function(req, res, next){

  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  next();

});

 
app.get('/userstatus', function(req, res) {
    res.json(guestoruser);
});
app.post('/logout', function(req, res) {
    console.log('i am in server');
    guestoruser = "guest";
    console.log(guestoruser);
});
app.post('/account',function(req, res){

   User.create(req.body).then(task => console.log("success"));

});
app.post('/login',function(req, res){

    console.log(req.body);

    var query = {'email': req.body.emailreg,"password":req.body.passwordreg}

 

User.findOne((query), function(err, data) {

    console.log(data);

    if(data.length === 0) {

        res.send(false);

    }

    else {
        guestoruser = req.body.emailreg;
        // console.log("entered");
        // console.log(guestoruser);
        res.send(true);

    }

})

 

});


        app.listen(3000,"127.0.0.1");

 

        console.log("server started");