import React from 'react';

function Task(props) {
    const { title, description, priority, id, completed, open, editing, 
        removeTask, completeTask, openTask, startEditingTask } = props;

    // function to ensure first letter of string is capitalized
    const capitalize = (string) => string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
    
    return (
        <div className={`todolist-item priority-${priority} 
                        ${completed ? "completed-task" : ""}
                        ${open ? "task-open" : ""} 
                        ${editing ? "task-editing" : ""}`}>
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
                {!editing // displays editing form when task is being edited
                    ? <i
                        className="fa-solid fa-pen task-btn edit-task-btn"
                        onClick={() => {startEditingTask({id: id})}}>
                    </i>
                    : null
                }
                {!completed // hides complete button if tasks is already completed
                    ? <i
                        className="fa-solid fa-check task-btn complete-task-btn"
                        onClick={() => {completeTask({id: id})}}>
                    </i>
                    : null
                }
            </div>
        </div>
    );
}

export default Task;