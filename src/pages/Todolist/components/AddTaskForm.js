import React, { useState } from 'react';

function AddTaskForm({ onSubmit, cancelAddingTask }) {
    
    // Form input values in state
    const [ titleInput, setTitleInput ] = useState('');
    const [ descInput, setDescInput ] = useState('');
    const [ priorityInput, setPriorityInput ] = useState('1');

    // Function called when form is submitted, creates new task. Ready to be added
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
        <form onSubmit={handleSubmit} className="todolist-item task-form" id="add-task-form">
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

            <label className="priority-range">
                <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={priorityInput}
                    onChange={ (event) => setPriorityInput(event.target.value) }
                /> 
                <span className="priority-label">
                    <span >1 <i>(low)</i></span>
                    <span style={
                        {
                            fontWeight: "600", 
                            paddingLeft: "calc(12px + 0.2vw)"
                        }
                    }> Priority: {priorityInput}</span>
                    <span>10 <i>(high)</i></span>
                </span>
            </label>

            <div className="form-buttons">
                <button type="submit">Add Task</button>

                <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={cancelAddingTask}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default AddTaskForm;