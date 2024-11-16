import React, { useState } from 'react';

const ExclamationIcon = () => <i className="fa-solid fa-exclamation" style={{color: "#ff3030"}} />;

function EditTaskForm(props) {

    const { title, description, priority, id, editTask, cancelEditingTask } = props;
    
    // Form input values in state
    const [ newTitleInput, setNewTitle ] = useState(title);
    const [ newDescInput, setNewDesc ] = useState(description);
    const [ newPriorityInput, setNewPriority ] = useState(priority);

    const handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh

        const newTask = { // constructing new task (id will be added in parent)
            title: newTitleInput,
            description: newDescInput,
            priority: newPriorityInput,
            completed: false,
            id: id
        }

        editTask(newTask); // submit task back to Todolist component
    }

    return (
        <form onSubmit={handleSubmit} className="todolist-item task-form" id="edit-task-form">
            <input 
                type="text"
                value={newTitleInput}
                placeholder="Edit task title..."
                onChange={ (event) => setNewTitle(event.target.value) }
                required
            />
            <input 
                type="text"
                value={newDescInput}
                placeholder="Edit task description..."
                onChange={ (event) => setNewDesc(event.target.value) }
                required
            />

            <div className="task-form-radios">
                <label>
                    <input 
                        type="radio"
                        name="priority"
                        value="active"
                        checked={ newPriorityInput === "active" }
                        onChange={ (event) => setNewPriority(event.target.value) }
                    />
                    Active
                </label>
                <label>
                    <input 
                        type="radio"
                        name="priority"
                        value="important"
                        checked={ newPriorityInput === "important" }
                        onChange={ (event) => setNewPriority(event.target.value) }
                    />
                    Important <ExclamationIcon /><ExclamationIcon />
                </label>
                <label>
                    <input 
                        type="radio"
                        name="priority"
                        value="low-priority"
                        checked={ newPriorityInput === "low-priority" }
                        onChange={ (event) => setNewPriority(event.target.value) }
                    />
                    Low Priority
                </label>
            </div>

            <div className="form-buttons">
                <button type="submit">Confirm</button>

                <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={cancelEditingTask}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default EditTaskForm;