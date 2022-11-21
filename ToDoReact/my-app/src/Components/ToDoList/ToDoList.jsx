import React, { useState } from "react";
import "./Styles.module.css";
import { FcEmptyTrash } from "react-icons/fc";

function ToDoList({ Todos, SetToDos }) {
  const removeTodo = (event) => {
    SetToDos(
      [...Todos].filter(function (item) {
        return item.id !== event.nativeEvent.path[2].attributes[0].value;
      })
    );
  };

  return (
    <ul>
      {Todos.map((todo) => {
        return (
          <li key={todo.id} id={todo.id}>
             <FcEmptyTrash
                className="icon"
                style={{
                paddingRight: "20px",
                paddingLeft: "10px",
                cursor: "pointer",
              }}
              onClick={removeTodo}
            />
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default ToDoList;
