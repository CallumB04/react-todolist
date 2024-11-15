import React from 'react';

function Task(props) {
    const { title, description, status, id, completed, removeTask, completeTask } = props;

    // function to ensure first letter of string is capitalized
    const capitalize = (string) => string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
    
    return (
        <div className={`todolist-item status-${status} ${completed ? "completed-task" : ""}`}>
            <div className="todolist-item-content">
                <h2 className="todolist-item-title">{capitalize(title)}</h2>
                <p className="todolist-item-desc">{capitalize(description)}</p>
            </div>

            <div className="todolist-item-buttons">
                <i
                    className="fa-solid fa-trash delete-task-btn"
                    onClick={() => {removeTask({id: id})}}>
                </i>
                <i
                    className="fa-solid fa-check complete-task-btn"
                    onClick={() => {completeTask({id: id})}}>
                </i>
            </div>
        </div>
    );
}

export default Task;