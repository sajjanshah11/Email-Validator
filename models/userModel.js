const mongoose = require('mongoose');
const validator = require("email-validator");
const db = require('../secret')

mongoose
    .connect(db.link)
    .then(function(db){
    console.log("connected succcesfully");
    // console.log(db);
    })
    .catch(function(err){
        console.log(err);
    })


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age:{
        type: Number
    },

    email: {
        type: String,
        required: true,
        unique:true,
        validate:function(){
            return validator.validate(this.email);
        }
        
    },

    password: {
        type: String,
        required: true,
        min: 8
    },

    confirmPassword: {
        type: String,
        required: true,
        min: 8,
        validate:function(){
            return this.password === this.confirmPassword
        }
    }

})

const userModel = mongoose.model('userSchema',userSchema);

(async function createModel(){
    let user = {
        name:"shah",
        age:22,
        email:"test2@test.com",
        password:123456,
        confirmPassword:123456
    }

    let userObj = await userModel.create(user)
    console.log(userObj);
})();
