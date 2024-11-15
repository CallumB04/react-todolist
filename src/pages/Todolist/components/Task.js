import React from 'react';

function Task(props) {
    const { title, description, status, id, completed, open, removeTask, completeTask, openTask } = props;

    // function to ensure first letter of string is capitalized
    const capitalize = (string) => string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
    
    return (
        <div className={`todolist-item status-${status} ${completed ? "completed-task" : ""} ${open ? "task-open" : ""}`}>
            <div className="todolist-item-content">
                <i
                    className={`fa-solid fa-chevron-down task-btn open-task-btn`}
                    onClick={() => {openTask({id: id})}}>
                </i>

                <h2 className="todolist-item-title">{capitalize(title)}</h2>
                {open ? <p className="todolist-item-desc">{capitalize(description)}</p> : null}
            </div>

            <div className="todolist-item-buttons">
                <i
                    className="fa-solid fa-trash task-btn delete-task-btn"
                    onClick={() => {removeTask({id: id})}}>
                </i>
                <i
                    className="fa-solid fa-check task-btn complete-task-btn"
                    onClick={() => {completeTask({id: id})}}>
                </i>
            </div>
        </div>
    );
}

export default Task;