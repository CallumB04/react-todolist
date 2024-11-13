import React from 'react';

function AddTaskButton(props) {
    return (
        <button className="todolist-item add-task-button" onClick={props.onClick}>
            <h2 className="add-task-button-text">Add new Task</h2>
            <i className="fa-solid fa-plus add-task-button-icon"></i>
        </button>
    )
}

export default AddTaskButton;