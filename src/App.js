//import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const todos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Aprender React",
    completed: false,
  },
  {
    text: "Entrevista de trabajo",
    completed: false,
  },
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />
     
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton /> 
      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export default App;
