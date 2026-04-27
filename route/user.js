
const express=require('express');
const router=express.Router();
const {handleusersignup}=require('../controller/user');
router.post('/',handleusersignup);
router.post('/login',handleusersignup);
module.exports=router;