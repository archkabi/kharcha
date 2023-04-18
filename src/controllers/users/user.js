const expressAsyncHandler = require("express-async-handler");
const User = require("../../models/User");

//register
const registerUser = expressAsyncHandler(async(req, res) => {
    const {email,firstname,lastname,password} = req?.body;
    //check if user exists
    const userexists = await User.findOne({email: req.body.email});
    if(userexists){ throw new Error("User already exists"); }

    try{
        //create user
        const user = await User.create({
            email,
            firstname,
            lastname,
            password
        });
        res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(500).send("Server error");
    }
})

//fetch all users
const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
    try{
        const user = await User.findOne({});
        res.json(user);
    }catch(error){
        res.json(error);
    }
});


module.exports = {registerUser, fetchUsersCtrl};