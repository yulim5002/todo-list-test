import React from "react"
import './style.css'

function Todo({ todo}) {


    return (

        <div className="todo_container">
            <h2>{todo.title}</h2>
        </div>
            )
        }   

export default Todo;