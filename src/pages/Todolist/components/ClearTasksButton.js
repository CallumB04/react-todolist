import React from 'react';

function ClearTasksButton(props) {
    return (
        <button className="todolist-item clear-tasks-button" onClick={props.onClick}>
            <h2 className="clear-tasks-button-text">Clear</h2>
            <i className="fa-solid fa-xmark clear-tasks-button-icon"></i>
        </button>
    )
}

export default ClearTasksButton;