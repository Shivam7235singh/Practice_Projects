import mongoose from'mongoose'

const userSchema = new mongoose.Schema({
    googleId :{
        type : String,
        required : true,
        unique : true,
    }
    ,
    displayName : String,
    Email : String,
    photo : String,
    createdAt : {
        type : Date,
        default : Date.now,
    },
})

const User = mongoose.model('User', userSchema);

export default User;