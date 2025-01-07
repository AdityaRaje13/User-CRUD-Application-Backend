const mongoose = require("mongoose");


const connection = mongoose.connect("mongodb://127.0.0.1:27017/user-crud-app").then(() => {
    console.log("Connection to mongodb is successful");
})


module.exports = connection;