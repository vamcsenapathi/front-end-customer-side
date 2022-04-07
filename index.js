var express = require("express");
var app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// var path = require('path')
const RegisterationData = require('./schema.js');

const bodyParser = require("body-parser");





app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/custlogin/css")));
// app.use(express.static(path.join(__dirname, "/busireg/css")));
app.use(bodyParser.json());



const mongoose = require("mongoose");
const urlencoded = require("body-parser/lib/types/urlencoded");
mongoose.connect("mongodb+srv://fow:fow@cluster0.p3fge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(() => {
    console.log("Successfully Connected To MongoDB Database.");
}).catch((e) => {
    console.log("Not Connected To MongoDB Database.");
})

const connection = mongoose.connection;



app.post('/sendData', function(req,res){
  //res.sendFile(__dirname + '/template/signup.html');
  // console.log(req.body);
  //res.send(req.body);
  var obj = new RegisterationData({
      Name:req.body.Name,
      MobileNumber:req.body.MobileNumber,
      Email:req.body.Email,
      Password:req.body.Password,
      ConfirmPassword:req.body.ConfirmPassword,
  })

  obj.save(function(err, results) {
      if(results){
         console.log(results);
          res.send(results);
      }else{
          console.log(err)
          res.send(err);
      }
  })

});


app.get('/getRegisterationData',(req,res)=>{
  RegisterationData.find(function(err,result){
          if(err || result==null)
          {
              
              console.log(err)
          }
          else if(result!=undefined)
          {
              
              console.log(result)
              res.send(result);
          }
      })
  });
  




app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// about page
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/views/about.html");
});

//shop page
app.get("/shop", function (req, res) {
  res.sendFile(__dirname + "/views/shop.html");
});





//cart page

app.get("/cart", function (req, res) {
  res.sendFile(__dirname + "/views/cart.html");
});

// checkout page
app.get("/checkout", function (req, res) {
  res.sendFile(__dirname + "/views/checkout.html");
});

//Account page
app.get("/my-account", function (req, res) {
  res.sendFile(__dirname + "/views/my-account.html");
});

//wishlist page
app.get("/wishlist", function (req, res) {
  res.sendFile(__dirname + "/views/wishlist.html");
});

//shopdetail page
app.get("/shop-detail", function (req, res) {
  res.sendFile(__dirname + "/views/shop-detail.html");
});

//service page

app.get("/service", function (req, res) {
  res.sendFile(__dirname + "/views/service.html");
});

//contact page

app.get("/contact-us", function (req, res) {
  res.sendFile(__dirname + "/views/contact-us.html");
});



app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/views/.html");
});

//create account

app.get("/createaccount", function (req, res) {
  res.sendFile(__dirname + "/views/create-account.html");
});


//customer regi
app.get("/customerregi", function (req, res) {
  res.sendFile(__dirname + "/custlogin/register.html");
});


//customer login
app.get("/customerlogin", function (req, res) {
  res.sendFile(__dirname + "/custlogin/login1.html");
});

// //register for business
// app.get("/busireg", function (req, res) {
//   res.sendFile(__dirname + "/busireg/regform.html");
// });


//register for business
app.get("/businessreg", function (req, res) {
  res.sendFile(__dirname + "/custlogin/businessreg.html");
});


//PRODUCTS OR FOOD MENUS

app.get("/shop1", function (req, res) {
  res.sendFile(__dirname + "/views/shop1.html");
});


app.get("/shop2", function (req, res) {
  res.sendFile(__dirname + "/views/shop2.html");
});


app.get("/shop3", function (req, res) {
  res.sendFile(__dirname + "/views/shop3.html");
});


app.get("/shop4", function (req, res) {
  res.sendFile(__dirname + "/views/shop4.html");
});




//restaurent index page
app.get("/dennys", function (req, res) {
  res.sendFile(__dirname + "/views/shop.html");
});

app.get("/sagarratna", function (req, res) {
  res.sendFile(__dirname + "/views/shop.html");
});

app.get("/hotelfountain", function (req, res) {
  res.sendFile(__dirname + "/views/shop.html");
});

app.listen(8000, () => console.log("Succcessfully server started."));
