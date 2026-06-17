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
userSchema.pre("save", async function () {
    console.log("Pre Method", this);

    if (!this.isModified("password")) {
        return;
    }

    const saltRound = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, saltRound);
});


const User = new mongoose.model("User" , userSchema);

module.exports = User ; 