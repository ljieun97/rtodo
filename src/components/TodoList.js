import React from 'react';
import Item from './Item'
import './TodoList.css'

function TodoList({todos, onCheck, onRemove}) {
  
  return(
    <div className="TodoList">
      {todos.map(todo =>
            <Item todo={todo} key={todo.id} onCheck={onCheck} onRemove={onRemove}/>)}
      
    </div>
  )
}


export default TodoList;
