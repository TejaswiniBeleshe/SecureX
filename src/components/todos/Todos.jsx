import React, { useEffect, useState } from 'react';
import Todo from './Todo';
const Todos = ()=>{
    const [allTodos,setAllTodos] = useState('')
    const getAllTodos = async()=>{
        try{
            let res = await fetch('http://localhost:8082/todos/673374199d268dcb5ff9992f')
            let datas = await res.json()
            console.log(datas)
            setAllTodos(datas)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllTodos()
    },[])
    return(
        <div>
            {
                allTodos && allTodos.map((ele)=><Todo title={ele.title} describe={ele.describe} />)
            }
        </div>
    )
}

export default Todos