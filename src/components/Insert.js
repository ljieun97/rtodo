import React, { useState } from 'react'
import './Insert.css'

const Insert = ({onInsert}) => {
    const [value, setValue] = useState('')
    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setValue(value);
      };

    const onSubmit = (event) => {
        event.preventDefault()
        onInsert(value)
        setValue('')
    }

    return(
        <form className="insertForm" onSubmit={onSubmit}>
            <input className="insertInput" autoFocus placeholder="오늘의 할 일을 추가하세요." value={value} onChange={onChange} required/>
        </form>
    )
}

export default Insert;