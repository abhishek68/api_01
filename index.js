

const express = require('express')
// mongoose connection

const connectDB=require("./connection")

const app  = express();
// app const contain express
const PORT =process.env.PORT || 3000
app.use(express.json());
app.use(cors());
const userModel = require('./user')
// mongoose model

// route:/
// description  : to get all user
// parameter  : none
app.get("/",async(req,res)=>{
  try{
    const user = await userModel.find(); 
    // to retrive all data
    console.log("hello")
    res.json({user})
    // req.toastr.success("done")
  }catch(error){
          res.status(500).json({error:error.message});
  }
  

})
// route://user/new
// description  : to add new user
// parameter  : none
// request body :user object

app.post('/user/new',async(req,res)=>{
  try{
    const {newUser} = req.body;
    await userModel.create(newUser);
    res.json({message:"user created"})
  }
  catch(err){
    res.status(500).json({error:error.message});

  }
       
})
// route://user/update/:_id
// description  : to update user
// parameter  : _id
// request body :user object

app.put("/user/update/:_id",async(req,res)=>{
  try{
    const {_id} = req.params;
    const {userData} = req.body;
   
    const updateUser = await userModel.findByIdAndUpdate(_id,
     {$set:userData},{new:true});
    res.json({user:updateUser})
  }
  catch(err){
    res.status(500).json({error:error.message});

  }       
  
})
// route://user/delete/:_id
// description  : to delete user
// parameter  : _id
// request body :none
app.delete('/user/delete/:_id',async(req,res)=>{
  try{
    const {_id} = req.params;
    await userModel.findByIdAndDelete(_id);
    res.json({message:"user deleted !"})  
  }
  catch(err){
    res.status(500).json({error:error.message});

  }
  
})
// route://user/delete/:userType
// description  : to delete user
// parameter  : _id
// request body :none
app.delete('/user/delete/type/:userType',async(req,res)=>{
  try{
    const {userType} = req.params;
    const allUser = await userModel.findOneAndDelete({userType});
 
    
   res.json({message:"user deleted !"})  
  }
  catch(err){
    res.status(500).json({error:error.message});

  }
  
})

// route://user/type/:type
// description  : to get user based on type
// parameter  : type
app.get("/user/type/:type",async(req,res)=>{
  try{
    const {type} = req.params;
    const user = await userModel.find({userType:type});
    if(!user){
      res.json({message:"no data"})
    }
    else
    {
      res.json({user})
    }

  }
  catch(err){
    res.status(500).json({error:error.message});

  }

})
// route://user/:_id
// description  : to get user based on id
// parameter  : id

app.get("/user/:_id",async(req,res)=>{
  try{
    const {_id} = req.params;
    const user = await userModel.findById(_id);
    if(!user){
     res.json({message:"no data"})
   }
   else
   {
     res.json({user})
   }
  }
  catch(error){
    res.status(500).json({error:error.message});
  

  }
         
})
app.listen(PORT,()=>{
  connectDB()
    .then((data)=>console.log("server is running"))
    .catch((err)=> console.log(err))
})

