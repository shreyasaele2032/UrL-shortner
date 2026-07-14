const express = require('express');
const router = express.Router();

const { handleusersignup, handlelogin } = require('../controller/user');
router.get('/login',(req,res)=>{
    res.render("login");
});
router.post('/', handleusersignup);        // Signup
router.post('/login', handlelogin);        // Login

module.exports = router;