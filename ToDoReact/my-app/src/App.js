import { useState } from 'react';

import './App.css';

import Header from './Components/Header/Header';
import AddToDo from "./Components/AddToDo/AddToDo"
import ToDoList from "./Components/ToDoList/ToDoList"


function App() {
  const [Todos,setTodos] = useState([])
  return (
    <div className="App">
    <Header  />
    <AddToDo setTodos = {setTodos}/>
    <ToDoList Todos = {Todos} SetToDos = {setTodos} />
    </div>
  
    

   
    
  );
}

export default App;
