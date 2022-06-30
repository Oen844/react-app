import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import {TodoContext} from "../TodoContex";

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch />

      <TodoContext.Consumer>
        {({error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo}) => (
          <TodoList>
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu algun Todo</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export { AppUI };
