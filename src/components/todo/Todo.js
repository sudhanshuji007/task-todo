import React, { useState } from 'react';
import { FaBoxOpen } from "react-icons/fa";

const Todo = () => {
    const [inputs, setInputs] = useState("");
    const [todoList, setTodoList] = useState([]);
    const handleChange = (event) => {
        setInputs(event.target.value)
    }
    const handleClick = () => {
        setTodoList([...todoList, inputs])
        setInputs("");
    }
    const remove = (i) => {
        if (typeof (i) === 'number' && i >= 0 && i < todoList.length) {
            setTodoList([...todoList.slice(0, i), ...todoList.slice(i + 1)])
        }
    }
    return (
        <>
            <div className='container'>
                <div className='todowrep'>
                    <div className="input-group">
                        <input type="text" className="form-control" name='todos' value={inputs} onChange={handleChange} />
                        <div className="input-group-append add_btn">
                            <button type='button' className="bnt btn-danger" onClick={handleClick}>Add</button>
                        </div>
                    </div>
                </div>
                {
                    todoList.map((values, i) => {
                        return (
                            <ul key={i} className="list">
                                <li>
                                    <div className='list_items'>
                                        {values} <FaBoxOpen onClick={e => { remove(i) }} />
                                    </div>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todo
