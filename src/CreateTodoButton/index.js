import React from "react";
import "./CreateTodoButton.css";

function  CreateTodoButton(props) {
     const onClinckButton = () => {
         props.setOpenModal(true);
        };

    return (
        <button 
            className="CreateTodoButton"
            onClick={onClinckButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };