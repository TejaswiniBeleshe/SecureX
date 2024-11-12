const mongoose = require('mongoose');


const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('connected with database')
    }
    catch(err){
        console.log('not able to connect')
    }
}

module.exports = connectDB;