const mongoose=require('mongoose');
async function mongodbconnect(url){
    return mongoose.connect(url);
}

module.exports={
    mongodbconnect,
}


//Node.js = worker 
//MongoDB = storage room 
//Connection = door between them 