const mongoose = require("mongoose")
const userModel = require("../models/user.models")
const userService = require("../services/user.services")


module.exports.userSignup = async (req,res)=>{
  console.log(req.body)
    const {fullName , email, password} = req.body;

    try{

      const userAlreday  = await userModel.findOne({email})

      if(userAlreday){
        return res.status(400).json({message: "email alreaday exist"})
      }

      const hasedPassword  = await userModel.hashPassword(password)

      const user  = await userService.createUser({
        fullName,
        email,
        password:hasedPassword
      })

      const token = await user.generateAuthToken()


      res.status(200).json({user,token})



    }catch (error){
      return res.status(500).json({ message: "Server error", error: error.message });
    }
}

module.exports.userLogin = async (req,res)=>{
  const {email,password}= req.body
  
  try{

    const user  = await userModel.findOne({email}).select("+password")

    if(!user){
      return res.status(400).json({message:"user email not found"})
    }

    const isMatch =await user.comparePassword(password)

    if(!isMatch){
      return res.status(400).json({message:"password is inccorectr"})
    }

    const token = await user.generateAuthToken()

    res.status(200).json({user,token})
  }catch(error){
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}