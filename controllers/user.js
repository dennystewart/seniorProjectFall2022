const express = require("express");
const router = express.Router();
const User = require("../models/user");

exports.createUser = async (req,res) => {
//router.post("/signup", (req, res) => {   
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
        
    });
   await user.save();
    res.send(user);


};

//user
//.save()
//.then(() => {

//})
//.catch(error => {

//});
//});

//recieves data input from the view and calls the user sql functions from the model

//fix database pause