const cors = require('cors');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// Allow frontend (any origin for now)
app.use(cors()); // allow frontend to make requests
app.use(express.json()); // Parse JSON body in POST requests 

// connecting to mongoDB
// mongoose.connect('YOUR_MONGODB_CONNECTION_STRING')
mongoose.connect("YOUR_MONGODB_CONNECTION_STRING")
    .catch(err=>{
        console.log("Error connecting to MongoDB" , err)
    })


// schema
const UserSchema = new mongoose.Schema({
    username:String,
    email: String,
    password:String,
})


// model
const User = mongoose.model('User',UserSchema);

// Route to add a user
app.post('/adduser', async (req,res)=>{
    const {username,email,password} = req.body // destructuring data from request 

    try{
        const hashedPassword = await bcrypt.hash(password, 10); // hash password with 10 salt rounds
        // Create a new document in memory
        const newUser = new User({username,email,password: hashedPassword}); 

        // Save the document to MongoDB
        await newUser.save();
        res.json({message:"User info saved successfully"})
    }
    catch(err){
        res.status(500).json({error:"something went wrong"})
    }
})

app.get('/showinfo',async (req,res)=>{
    try{
        const info = await User.find();
        res.json(info);
    }
    catch(err){
        console.lof(err);
        res.status(500).json({error:"Failed to fetch users"});
    }
})

app.listen(3000,()=>{
    console.log("Started listening on port 3000");
})
