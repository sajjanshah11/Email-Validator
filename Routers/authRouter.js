const express = require("express");
const userModel = require("../models/userModel")

const authRouter = express.Router();

authRouter
    .route("/signup")
    .post(setCreatedAt,signUpUser);

authRouter
    .route('/login')
    .post(loginUser)


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

async function loginUser(req,res){
    try{
        if(req.body.email){

            let user = await userModel.findOne({email:req.body.email});

            if(user){
                if(req.body.password == user.password){
                    return res.json({
                        message:"User Logged in Successfully"
                    })
                } else {
                    return res.json({
                        message:"email Id and password is wrong"
                    })
                }
            } else {
                message:"email or password is wrong"
            }

        } else {
            return res.json({
                message:"user doesnot exits";
            })
        }
    } catch(err) {
        return res.status(500).json({
            message:err.message;
        })
    }
}


module.exports = authRouter