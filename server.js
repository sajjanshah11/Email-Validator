const express = require("express");
const app = express();
const port = "5000";

app.listen(port, function () {
  console.log(`server running succesfullt at ${port}`);
});

app.get("/home", (req, res) => {
  res.send("this is the response from server.js from home page");
});

app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("I am from first middleware");
  next();
});

//Routing in Express
const userRouter = require('./Routers/userRouter')
const authRouter = require('./Routers/authRouter')

app.use("/user", userRouter);
app.use("/auth", authRouter);

//mounting in routes
// userRouter
//   .route("/")
//   .get(getUser)
//   .post(createUser)
//   .patch(updateUser);

app.use((req, res, next) => {
  console.log("i m from second middleware");
  next();
});

// userRouter.route("/:id").get(getUserById);

// authRouter
//     .route("/signup")
//     .post(setCreatedAt,signUpUser);

// function setCreatedAt(req,res,next){

//   req.body.createdAt = new Date().toString()
  
//   next();
// }

// let user = [];

// const userModel = require('./models/userModel');

// async function signUpUser(req, res) {

// //   let { email, name, password } = req.body;

// //   user.push({ email, name, password });

//     try{
//         let userObj = req.body

//         let user = await userModel.create(userObj);

//         console.log("user", user);

//         res.json({
//         message: "user signedup",
//         user: userObj   
//         });
//     }
//     catch(err){
//         console.log(err);
//         res.json({
//         message:err.message
//         })
//     }
  
  
// }

// app.get('/user',getUser)

// function getUser(req, res) {
//   console.log("get user was called");
//   res.json(user);
// }

// // app.post('/user',createUser)

// function createUser(req, res) {
//   user = req.body;
//   res.send("data has been added succesfully");
// }

// // app.patch('/user',updateUser)

// function updateUser(req, res) {
//   let obj = req.body;

//   for (let key in obj) {
//     user[key] = obj[key];
//   }

//   res.json(user);
// }

//param router

// app.get('/user/:id', getUserById)

function getUserById(req, res) {
  console.log(req.params);
  res.send(req.params.id);
}

app.get("/user-all", (req, res) => {
  res.redirect("/user");
});

app.use((req, res) => {
  res.sendFile("public/404.html", { root: __dirname });
});
