import React, { useState } from "react";
import "./Style.module.css";

function AddToDo({ setTodos }) {
  const [inputValue, setValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos((pre) => [...pre, inputValue]);
      setValue("");
    }
  };
  const change = ({ target }) => {
    setValue(target.value);
  };
  return (
    <div
      className="addToDo"
      style={{
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        paddingTop: "5%",
      }}
    >
      <input
        value={inputValue}
        onChange={change}
        type="text"
        placeholder="What needs to be done?"
        id="input"
      ></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
export default AddToDo;
