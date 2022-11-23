import React, { useState } from "react";
import "./Style.module.css";
import styles from "./Style.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoTrashBin } from "react-icons/io5";

function ToDoList({ value, setTodo, index }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const completed = () => {
    setIsCompleted((pre) => !pre);
  };

  const removeTodo = () => {
    setTodo((pre) => pre.filter((_, id) => id !== index));
  };

  return (
    <li id={index}>
      <IoTrashBin
        className="icon"
        style={{
          color: "rgb(6, 82, 126)",
          cursor: "pointer",
        }}
        onClick={removeTodo}
      />
      <i className={isCompleted ? styles.iconComplete : styles.iconIncomplete}>
        <IoCheckmarkCircleOutline
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => completed()}
        />
      </i>
      <i className={isCompleted ? styles.completed : styles.toDo}>{value}</i>
    </li>
  );
}

export default ToDoList;
