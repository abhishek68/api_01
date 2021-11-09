const moongoose = require("mongoose")

const connectToDB = async()=>moongoose.connect("mongodb+srv://abhishek:SOMEONE23@bootcamp.iuvbp.mongodb.net/studentDB?retryWrites=true&w=majority",{
    useNewUrlParser:true,
   
    useUnifiedTopology:true,
});

module.exports  = connectToDB 
