const moongoose = require("mongoose")

const connectToDB = async()=>moongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
   
    useUnifiedTopology:true,
});

module.exports  = connectToDB 