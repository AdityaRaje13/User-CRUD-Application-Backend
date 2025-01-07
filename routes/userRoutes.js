const express = require("express");
const router = express.Router();
const User = require("../models/user");
const connection = require("../config/connectdb");



router.get("/register", (req, res) => {

    res.render("index");
})



//CREATE

router.post("/register", async (req, res) => {

    const{name, email, pass} = req.body;

    await User.create({
        name : name,
        email : email,
        password : pass,
    })

    res.send("<h1>New User registered succefully </h1>");
    
})


//Read

router.get("/read-user", async (req, res) => {

    const records = await User.find();

    res.json(records);
})



//Update

router.get("/update-user", async (req, res) => {

    await User.findOneAndUpdate({name:"Sarthak"}, {email:'sarthak@gmail.com'});

    const record = await User.find();
    res.json(record);
})


//delete 

router.get("/delete-user", async (req, res) => {

    await User.findOneAndDelete({name:"Kunal Jadhav"});

    const record = await User.find();
    res.json(record);
})


module.exports = router;