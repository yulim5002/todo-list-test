import React from "react"
import './style.css'
import Todo from '../todo/Todo'

function List({ todos, setTodos }) {
    // 다른 형제 컴포넌트들의 event에 의해 부모컴포넌트에서 수정된 props들을 넘겨 받는다.
   // setTodos(newTodos)

    return (
        <div className="list_container">
            <h1>TodoList</h1>
            
              {todos.map((todo) => {
                    if (todo.isDone === false) {
                        return <Todo todo={todo} key={todo.id} setTodos={setTodos}/>
                    }
                }
                )}
            
            </div>
    )
}
export default List