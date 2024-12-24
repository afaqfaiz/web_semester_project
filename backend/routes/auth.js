const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

// Register a new user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  username=name;

  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});


router.post('/login', async(req,res)=>{
  const {email,password}=req.body;
  try{
    const user=await User.findOne({email});
    if(!user){
      return res.status(400).send("user don't exist....");
    }
    const isPasswordCorect= await bcrypt.compare(password,user.password)
    if(!isPasswordCorect){
       return res.status(400).send("password is incorrect");
       
    }
    const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn: "10m"})

     return res.status(200).json({user,token})
  }
  catch(error)
  {
    console.log("error is =>", error);
    res.status(500).send("some error occured: ")
  }
});
module.exports = router;
