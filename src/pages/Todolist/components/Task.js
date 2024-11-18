import React, { useEffect, useMemo, useState } from 'react';

function Task(props) {
    const { title, description, priority, id, completed, open, editing, 
        removeTask, completeTask, openTask, startEditingTask } = props;

    // function to ensure first letter of string is capitalized
    const capitalize = (string) => string ? string.charAt(0).toUpperCase() + string.slice(1) : "";

    // handling resizing of window for title/description length
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    })

    // max lengths for task title and description
    const maxTitleLength = useMemo(() => 11 + windowWidth / 45, [windowWidth]);
    const maxDescriptionLength = useMemo(() => (windowWidth / 1.2) - (0.000275 * windowWidth ** 2), [windowWidth]);
    
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

                <span className="todolist-title-wrapper">
                    <h2 className="todolist-item-title">{
                        title.length < maxTitleLength
                        ? capitalize(title)
                        : capitalize(title).slice(0, maxTitleLength - 2).replace(/\s$/g, "") + "..."
                    }</h2>
                </span>
                {open ? <p className="todolist-item-desc">{
                    description.length < maxDescriptionLength
                    ? capitalize(description)
                    : capitalize(description).slice(0, maxDescriptionLength).replace(/\s$/g, "") + "..."
                }</p> : null} 
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