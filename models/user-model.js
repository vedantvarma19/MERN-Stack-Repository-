const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username : { 
        type:String,
        required:true,
    },
    email : { 
        type:String,
        required:true,
    },
    phone : { 
        type:String,
        required:true,
    },
    password : { 
        type:String,
        required:true,
    },
    isAdmin : { 
        type:Boolean,
        default:false,
    },
});

// secure the password 
userSchema.pre('save' , async function(){
console.log('Pre  Method' , this ); 
const user = this ; 

if(user.isModified('password')){ 
    next();
}

try{ 
    const saltRound = await bcrypt.genSalt(10) ; 
    const hash_Password = await bcrypt.hash(user.password , saltRound);
    user.password = hash_Password;
} catch(error){
    next(error);
}
});


const User = new mongoose.model("User" , userSchema);

module.exports = User ; 