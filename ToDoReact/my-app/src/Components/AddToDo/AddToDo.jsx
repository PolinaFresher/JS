import React, { useState } from 'react';
import  "./Styles.module.css"


function AddToDo ({setTodos}) {
    const [inputValue,setValue] = useState('');
    
    const addTodo = () =>{
        setTodos((pre) => [...pre, {id: Math.random().toFixed(2), title:inputValue}])
        setValue('')
    }
    const change = (event) => {
        setValue(event.target.value)
    }
    return (
    <div className='addToDos'style={{ 
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20%"

    }}>
      <input value={inputValue} onChange={change} type="text" placeholder = "What needs to be done?"  id='input'></input>
      <button onClick={addTodo}>Add</button>
      </div>
    )
}
export default AddToDo