import { useState } from "react";
import "./App.css";
import style from "./Components/ToDoList/Style.module.css";
import Header from "./Components/Header/Header";
import AddToDo from "./Components/AddToDo/AddToDo";
import ToDoList from "./Components/ToDoList/ToDoList";
import ClearAllButton from "./Components/ClearAllButton/Button";
import image from "./7580949.jpg";

function App() {
  const [Todo, setTodo] = useState([]);
  return (
    <div className="App">
      <Header />

      <AddToDo setTodos={setTodo} />
      <img src={image} className="notebook" alt="notebook" />
      <>
        <ul className={style.toDoWrapper}>
          {Todo.map((item, index) => {
            return <ToDoList value={item} setTodo={setTodo} index={index} />;
          })}
        </ul>
      </>

      <ClearAllButton setTodos={setTodo} />
    </div>
  );
}

export default App;
