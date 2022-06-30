import React from "react";
import "./CreateTodoButton.css";

function  CreateTodoButton(props) {
     const onClinckButton = () => {
         props.setOpenModal(prevState => !prevState);
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