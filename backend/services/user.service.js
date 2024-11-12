const User = require('../models/user.model.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class userLogics{
    newUser=async(payload)=>{
        return User.create({...payload,password:await this.hashPassword(payload.password)})
    }
    isUserPresent(payload){
        return User.findOne({'email':payload})
    }
    hashPassword(password){
        return bcrypt.hash(password,10)
    }
    comparePassword(password,encodedPassword){
        return bcrypt.compare(password,encodedPassword)
    }
    generateToken(payload){
        return jwt.sign(payload,process.env.SECRETE_KEY)
    }

}

module.exports = userLogics;