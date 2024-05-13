const  mongoose  = require("mongoose");

const Schema =mongoose.Schema ;

const userSchema =new Schema({
    firstname: {
        type: String,
        required: true
      },
      lastname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      telephone: {
        type: String, // Since you're using type="number" in the form, consider using String to preserve leading zeros
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      country: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
        enum: ['male', 'female'] // Define the possible values for the gender field
      },
   //   createdAt : { type: Date, default: Date.now},
   //   modifiedAt : { type: Date, default: Date.now}

    },{timestamps:true});
 const User=mongoose.model('User',userSchema);

 module.exports=User ;