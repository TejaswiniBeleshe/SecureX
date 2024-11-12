const Joi = require('joi');

const validateUser = Joi.object({
    username:Joi.string().max(50),
    password:Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email:Joi.string().pattern(new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)).email({minDomainSegments:2,tlds:{allow:['com']}})
}).and('username','password','email');



const validateLoginUser = Joi.object({
    email:Joi.string().pattern(new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)).email({minDomainSegments:2,tlds:{allow:['com']}}),
    password:Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})


module.exports = {validateUser,validateLoginUser}