const User = require('../models/user.model.js');
const userLogics = require('../services/user.service.js')
const allUserLogics = new userLogics();

const registerUser = async(req,res)=>{
    try{
        let result = await allUserLogics.newUser(req.body);
        if(!result){
            throw new Error('went wrong')
        }
        res.status(201).send(result);
    }
    catch(err){
        return res.status(500).send({'message':err.message})
    }
}

const loginUser = async(req,res)=>{
    try{
        let result = await allUserLogics.isUserPresent(req.body.email);
        console.log(result)
        let comparedRes = await allUserLogics.comparePassword(req.body.password,result.password);
        console.log(comparedRes)
        if(!comparedRes){
            return res.status(409).send({message:"Invalid password"})
        }
        console.log(result.id);
        // return res.cookie('token',result.username)
        return res.send({token: await allUserLogics.generateToken(result.id),username:result.username})
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}




module.exports = {registerUser,loginUser}