import React, { useState } from "react";
import styles from "./Style.module.css";

function ClearAllButton({ setTodos }) {
  const [Clear] = useState([]);

  const clearToDoList = () => {
    setTodos(Clear);
  };

  return (
    <div className={styles.btn}>
      <button onClick={clearToDoList}>
        <p>Clear all</p>
      </button>
    </div>
  );
}

export default ClearAllButton;
