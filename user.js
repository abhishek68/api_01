// mongo db schema-structure of data from mongoose
// model-document object 
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
      name: String,
      email:String,
      phno:Number,
      userType:String,
});

const userModel = mongoose.model("User",userSchema);
// User -> db name

module.exports = userModel;