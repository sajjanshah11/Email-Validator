

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    delivery:{
        type: Boolean,
        required:true
    }

    meals:{
        type:Number,
        required:true
    },

    description:{
        type:String,
        required:true
    }
})