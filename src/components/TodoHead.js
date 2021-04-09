import React from 'react'
import './TodoHead.css'

const TodoHead = () => {
    let today = new Date();
    let year = today.getFullYear(); 
    let month = today.getMonth() + 1;  
    let date = today.getDate(); 
    let day = today.getDay();

    switch (day) {
        case 1:
            day='월'
            break;
        case 2:
            day='화'
            break;
        case 3:
            day='수'
            break;
        case 4:
            day='목'
            break;
        case 5:
            day='금'
            break;
        default:
            break;
    }

    return (
        <div className="TodoHead">
            <h1>Todo</h1>
            <div className="date">{year}년 {month}월 {date}일 {day}요일</div>
        </div>
    )
  }

export default TodoHead