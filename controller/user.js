//controller is used because to process the request 
const User = require('../models/user');
// const {v4:uuidv4}=require('uuid');
const {SetUser}=require('../service/auth');
async function handleusersignup(req, res) {
    const { name, email, pass } = req.body;

    await User.create({
        name,
        email,
        pass,
    });
    
    return res.redirect("/user/login");
}

module.exports = {
    handleusersignup,
};



async function handlelogin(req, res) {
    const { email, pass } = req.body;

    const user = await User.findOne({ email, pass });

    if (!user) {
        return res.render("login");
    }


    const token=SetUser(user);

    res.cookie("jtoken", token);

    return res.redirect("/");
}

module.exports={
    handleusersignup,
    handlelogin,
}

