const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const register=require('./schema.js')
const middleware=require('./jwt.js')

app.use(cors())
app.use(bodyParser.json())
const SECRET_KEY="secretkey"

// Connect to MongoDB server
mongoose.connect('mongodb://localhost:27017/jwt', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        
        // Create a new database named "jwt"
        mongoose.connection.db.admin().command({ create: "jwt" })
            .then(() => {
                console.log("Database 'jwt' created successfully");
            })
            .catch(error => {
                console.error("Error creating database:", error);
            });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
    });


app.post('/register',async(req,res)=>{
    try{
        const {username,password}=req.body
        const hashpassword=await bcrypt.hash(password,10)
        const newuser=new register({username,password:hashpassword})
        await newuser.save()
        res.status(200).json({message:"user created successfully"})
    }
    catch(err){
        res.status(500).json({err:"error in registering"})
    }
})

app.get("/register",async(req,res)=>{
    try{
        const use=await register.find()

        res.status(201).json(use)
    }
    catch(err){
        res.status(500).json({err:"unable to get users"})
    }
})
app.post('/login',async(req,res)=>{
    try{
        const {username,password}=req.body
       const user=await register.findOne({username})

       if(!user){
        res.status(401).json({message:"Invalid credentials"})
       }
     const ispasswordvalid=await bcrypt.compare(password,user.password)
        if(!ispasswordvalid){
            res.status(401).json({message:"invalid credentials"})
        }
        let payload={userId:user._id}
        
        jwt.sign(payload,SECRET_KEY,{expiresIn:3600000},
        (err,token)=>{
            if (err) throw err;
            return res.json({token})
        }
        )
    }

    catch(err){
        res.status(500).json({err:"error in login"})
    }
})



// Use middleware for routes that require authentication
app.get('/myhome', middleware, async(req, res) => {
    

    try {
        console.log(req.userId)
    // let exist=register.findById(req.userId)
    // if(!exist){
    //     res.status(501).send("user not found")
    // }
    // res.json(exist)
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error');
    }
});

    
//routes
//middlewares
//schema
app.listen(8000,()=>{
    console.log("server is listening to port 4000")
})