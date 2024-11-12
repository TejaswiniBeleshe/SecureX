const Todos = require('../models/todos.model.js');

class todoLogic{
    getAll(user){
        return Todos.findOne({handler:user})
    }
    addNewTodo(payload,user){
        let uDate = {handler:user,todolist:[payload]}
        return Todos.create(uDate)
    }
    removeTodo(todoId){
        return Todos.findByIdAndDelete(todoId)
    }
    findById(id){
        return Todos.findOne({handler:id})
    }
    addInExisting(payload,user){
        return Todos.findOneAndUpdate({handler:user},{$push:{todolist:payload}},{new:true})
    }

}

module.exports = todoLogic