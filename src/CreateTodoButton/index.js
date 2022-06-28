import React from "react";
import "./CreateTodoButton.css";

function  CreateTodoButton() {
     const onClinckButton = (msg) => {
         alert(msg);
        };

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClinckButton("Boton de crear un Todo")}
        >
            +
        </button>
    );
}

export { CreateTodoButton };