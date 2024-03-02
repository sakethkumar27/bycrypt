const mongoose = require('mongoose');



const signin = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  
});

console.log("MongoDB connected");

const register = mongoose.model("register", signin);


module.exports=register
