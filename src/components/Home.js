import React, {useState, useRef} from 'react'
import TodoHead from './TodoHead'
import Insert from './Insert'
import TodoList from './TodoList'

import './Home.css'

const Home = () => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          text: '첫 번째 할 일',
          checked: true
        },
        {
          id: 2,
          text: '두 번째 할 일',
          checked: true
        },
        {
          id: 3,
          text: '세 번째 할 일',
          checked: false
        }
      ])
    
    const nextId = useRef(4)
    const onInsert = ((text) => {
        const todo = {
        id: nextId.current,
        text,
        checked: false
        }
    setTodos(todos.concat(todo))
    nextId.current += 1; 
    })
    
    const onCheck = (id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
    })

    const onRemove = (id => {
    setTodos(todos.filter(todo => todo.id !== id))
    })

    
    
    return (
        <div className="home">
            <TodoHead />
            <Insert onInsert={onInsert}/>
            <TodoList todos={todos} onCheck={onCheck} onRemove={onRemove}/>
        </div>
    )
}

export default Home