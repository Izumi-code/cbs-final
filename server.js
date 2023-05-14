const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extented: true}));

mongoose.connect("mongodb+srv://mjpcsuguitan:wrongnote255@cluster0.brr6iyv.mongodb.net/crud")

const userSchema = {
    firstname: String,
    middlename: String,     
    lastname: String,       
    // age: Integer,            
    gender: String,        
    // contact_number: Integer, 
    email: String,          
    password: String,       
    usertype: String,
}

const User = mongoose.model("User", userSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    let newUser = new User({
        firstname: req.body.firstname,
        middlename: req.body.middlename,     
        lastname: req.body.lastname,       
        // age: Integer,            
        gender: req.body.gender,        
        // contact_number: Integer, 
        email: req.body.email,          
        password: req.body.password,       
        usertype: req.body.usertype,
    });
    newUser.save();
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("Server is running on 3000");
})