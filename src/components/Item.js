import React , {useState} from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdModeEdit, MdDelete, MdClear } from 'react-icons/md';
import "./Item.css"

const Item = ({todo, onCheck, onRemove}) => {
  const {id, text, checked} = todo;
  const [editing, setEditing] = useState(false)
  const [newText, setNewText] = useState(text)

  const toggleEditing = () => {
    setEditing((prev) => !prev)
    setNewText(text);
  }
  
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewText(value);
  };

  const onSubmit = (event) => {
      event.preventDefault()

      todo.text=newText
      
      setEditing(false)
  }

  const CheckBox = styled.div`
  ${props =>
    props.checked &&
    css`
      border: 1px solid #ced4da;
      color: #ced4da;
    `}
  `;

  const Text = styled.div`
  ${props =>
    props.checked &&
    css`
      color: #ced4da;
    `}
  `;

  return(
    <div className="item">
      {editing ? (
        <div className="TodoEdit">
          <form className="editForm" onSubmit={onSubmit}>
            <input className="editInput" autoFocus placeholder="수정하세요" value={newText} onChange={onChange} required/>
            <div className="done" onClick={onSubmit}><MdDone /></div>
          </form>
          <div className="clear" onClick={toggleEditing}><MdClear /></div>
        </div>
      ) : (
        <div className="TodoItem">
          <CheckBox className="checkBox" onClick={()=>onCheck(id)} checked={checked}>{checked && <MdDone />}</CheckBox>
          <Text className="text" checked={checked}>{text}</Text>
          <div className="edit" onClick={toggleEditing}><MdModeEdit /></div>
          <div className="remove" onClick={()=>onRemove(id)}><MdDelete /></div>
        </div>
      )}
    </div>
  )
}


export default Item;