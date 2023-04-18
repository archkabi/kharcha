const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//schema

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true,"First name is required"]
    },
    lastname: {
        type: String,
        required: [true,"Last name is required"]
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"Password is required"]
    },
    isadmin: {
        type: Boolean,
        default: false
    },
},  
    { 
        timestamps: true 
    }
);

//hash password

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//compile schema to model
const User = mongoose.model('User', userSchema);
module.exports = User;