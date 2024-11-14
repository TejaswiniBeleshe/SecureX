const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,   
    },
    describe:{
        type:String,
        default:''
    }
})

const todosSchema = new mongoose.Schema({
    handler:{
        type:String,
        required:true,
    },
    todolist:{
       type: [todoSchema],
       default:[],
    }
})

const Todos = mongoose.model('Todos',todosSchema)

module.exports = Todos;
