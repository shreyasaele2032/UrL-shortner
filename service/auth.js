const jwt=require('jsonwebtoken');
const secret='shreyas2032';

function setuserid(id,user){
    const payload={
        id,
        ...user,
    };
    return jwt.sign(payload,secret)
}