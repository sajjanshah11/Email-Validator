const express = require("express");
const userModel = require("../models/userModel")

const authRouter = express.Router();

authRouter
    .route("/signup")
    .post(setCreatedAt,signUpUser);


function setCreatedAt(req,res,next){

  req.body.createdAt = new Date().toString()
  
  next();
}

let user = [];

async function signUpUser(req, res) {

//   let { email, name, password } = req.body;

//   user.push({ email, name, password });

    try{
        let userObj = req.body

        let user = await userModel.create(userObj);

        console.log("user", user);

        res.json({
        message: "user signedup",
        user: userObj   
        });
    }
    catch(err){
        console.log(err);
        res.json({
        message:err.message
        })
    }
  
  
}

module.exports = authRouter