const todoLogic = require('../services/todos.service.js');
const allTodoLogic = new todoLogic();


const getAllTodo = async(req,res)=>{
    try{
        // console.log(req.userId,'get request')
       let userInfo = await allTodoLogic.getAll(req.userId);
       console.log(userInfo)
       res.send(userInfo.todolist)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}

const createNewTodo = async(req,res)=>{
    try{
        let result = await allTodoLogic.findById(req.params.id);
        console.log(result)
        if(!result){
            let created = await allTodoLogic.addNewTodo(req.body,req.params.id);
            console.log(created)
            return res.send(created)
        }
        res.send(await allTodoLogic.addInExisting(req.body,req.params.id))   
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}


module.exports = {getAllTodo,createNewTodo}