const express = require("express");
// const app = express();

const userRouter = express.Router() 
const userModel = require("../models/userModel")

 
userRouter
  .route("/")
  .get(getUsers)
  .post(createUser)
  .patch(updateUser);


userRouter
    .route("/:id")
    .get(getUserById);


  // app.get('/user',getUser)

async function getUsers(req, res) {

  try {
    console.log("get user was called");
  
    let users = await userModel.find();

    if(users){
      return res.json(user)
    } else {
      return res.json({
      message:"user not found";
    })
  }

  } catch (err) {
      return res.json({
        message:err.message
      })
  }

}

// app.post('/user',createUser)

function createUser(req, res) {
  user = req.body;
  res.send("data has been added succesfully");
}

// app.patch('/user',updateUser)

function updateUser(req, res) {
  let obj = req.body;

  for (let key in obj) {
    user[key] = obj[key];
  }

  res.json(user);
}


function getUserById(req, res) {
  console.log(req.params);
  res.send(req.params.id);
}


module.exports = userRouter  