import React, { useState } from 'react';

const ExclamationIcon = () => <i className="fa-solid fa-exclamation" style={{color: "#ff3030"}} />;

function AddTaskForm({ onSubmit, cancelAddingTask }) {
    
    // Form input values in state
    const [ titleInput, setTitleInput ] = useState('');
    const [ descInput, setDescInput ] = useState('');
    const [ priorityInput, setPriorityInput ] = useState('active');

    const handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh

        const newTask = { // constructing new task (id will be added in parent)
            title: titleInput,
            description: descInput,
            priority: priorityInput,
            completed: false,
            open: false,
            editing: false
        }

        onSubmit(newTask); // submit task back to Todolist component
    }

    return (
        <form onSubmit={handleSubmit} className="todolist-item" id="add-task-form">
            <input 
                type="text"
                value={titleInput}
                placeholder="Enter new task..."
                onChange={ (event) => setTitleInput(event.target.value) }
                required
            />
            <input 
                type="text"
                value={descInput}
                placeholder="Enter task description..."
                onChange={ (event) => setDescInput(event.target.value) }
                required
            />

            <div id="task-form-radios">
                <label>
                    <input 
                        type="radio"
                        name="priority"
                        value="active"
                        checked={ priorityInput === "active" }
                        onChange={ (event) => setPriorityInput(event.target.value) }
                    />
                    Active
                </label>
                <label>
                    <input 
                        type="radio"
                        name="priority"
                        value="important"
                        checked={ priorityInput === "important" }
                        onChange={ (event) => setPriorityInput(event.target.value) }
                    />
                    Important <ExclamationIcon /><ExclamationIcon />
                </label>
                <label>
                    <input 
                        type="radio"
                        name="priority"
                        value="low-priority"
                        checked={ priorityInput === "low-priority" }
                        onChange={ (event) => setPriorityInput(event.target.value) }
                    />
                    Low Priority
                </label>
            </div>

            <div id="form-buttons">
                <button type="submit">Add Task</button>

                <button 
                    type="button" 
                    id="cancel-btn"
                    onClick={cancelAddingTask}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default AddTaskForm;