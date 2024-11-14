const {validateUser,validateLoginUser} = require('../validators/user.validator.js')
const userLogics = require('../services/user.service.js');
const allUserLogics = new userLogics();

const checkUser = (req,res,next)=>{
    try{
        let {error} = validateUser.validate(req.body);
        // console.log(result,req.body)
        if(error){
           return res.status(400).send({'message':error.details[0].message})
        }
        next();
    }
    catch(err){
        res.status(500).send({message:err.message})

    }
}

const isAlreadyPresent = async(req,res,next)=>{
    try{
        let result = await allUserLogics.isUserPresent(req.body.email);
        if(result){
            return res.status(409).send({message:"user already present"})
        }
        next()
    }
    catch(err){
        return res.status(500).send({message:err.message})

    }

}

const checkLoginUser = (req,res,next)=>{
    try{
        let result = validateLoginUser.validate(req.body);
        if(result.error){
            return res.status(400).send({message:result.error.details[0].message})
        }
        next();
    }
    catch(err){
        return res.status(500).send({message:err.message})

    }
}

const isLoginUserPresent = async(req,res,next)=>{
    try{
        let result = await allUserLogics.isUserPresent(req.body.email);
        if(!result){
            return res.status(404).send({message:'Please Signup before logging in'})
        }
        console.log('passed')
        next()
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}

const validateUserToken = async(req,res,next)=>{
    // console.log(req.headers)
    try{
        const token = req.headers['authorization'].split(' ')[1]
        let user = await allUserLogics.validateToken(token);
        // console.log(user)
        if(!user){
            return res.status(403).send({message:'invalid token user is not found'})
        }
        req.userId = user
        next()
    }
    catch(err){
        return res.status(500).send({message:err.message})
    } 
}


module.exports = {checkUser,isAlreadyPresent,checkLoginUser,isLoginUserPresent,validateUserToken}