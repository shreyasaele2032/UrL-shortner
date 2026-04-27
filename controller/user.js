
const User=require('../models/user')
async function handleusersignup(req,res){
    const {name,email,pass}=req.body;
    await User.create({
        name,
        email,
        pass,
    });

    return res.render("home");
}

module.exports={
    handleusersignup
}