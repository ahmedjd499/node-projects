const  mongoose  = require("mongoose");

const Schema =mongoose.Schema ;

const userSchema =new Schema({
    username :String,
    createdAt : { type: Date, default: Date.now}
})

 const User=mongoose.model('User',userSchema);

 module.exports=User ;