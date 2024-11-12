import React from "react";

const Todo = ({title,describe})=>{
    return(
        <div>
            <h1>{title}</h1>
            <p>{describe}</p>
        </div>
    )
}
export default Todo;