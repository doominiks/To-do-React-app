import React from 'react'
import './ToDoItem.css';


const ToDoItem = props => {
    const { id, completed, toggleClass, text, deleteItem } = props

    return (
        <li key={id} onClick={completed} className={toggleClass ? 'completed' : null}>
            <button className="fa fa-trash" onClick={deleteItem}></button>
            {text}
        </li>
    );
}

export default ToDoItem;