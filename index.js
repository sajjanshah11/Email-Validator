const express = require('express');

const app = express();

let port = '8000';

app.listen(port,function(){
    console.log(`server listening at ${port}`);
})

// app.get('/home',(req,res)=>{
//     console.log('this is the response coming from home page')
// })

const authRouter = express.Router()

app.use(express.json());
app.use(express.static("public"));

app.use('/auth',authRouter);

authRouter.route("/forgetpassword")
    .get(displayforgetpassword)
    .post(signUpUser,validateEmail);

function displayforgetpassword(req,res) {
    res.sendFile('./public/forgetpassword.html', {root:__dirname})
}

function signUpUser(req,res,next) {
    let data = req.body;

    console.log("user",req.body)

    next();

    
}

function validateEmail(req,res){

    console.log("Inside Validate Email");

    console.log(req.body)

    //to check if the email is correct or not

    // res.json({
    //     message:"user signedup",
    //     user:data.email
    // })

}
