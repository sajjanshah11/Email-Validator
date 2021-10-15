const express = require("express");
// const app = express();

const userRouter = express.Router()

 
userRouter
  .route("/")
  .get(getUser)
  .post(createUser)
  .patch(updateUser);


userRouter
    .route("/:id")
    .get(getUserById);


  // app.get('/user',getUser)

function getUser(req, res) {
  console.log("get user was called");
  res.json(user);
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