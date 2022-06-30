import React from "react";
import './todoCounter.css';
import { TodoContext } from "../TodoContex";

function TodoCounter () {
    const {total: totalTodos, completed: completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
      
    );
}

export { TodoCounter };