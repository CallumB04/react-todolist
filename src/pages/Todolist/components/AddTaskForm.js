import React, { useState } from 'react';

function AddTaskForm({ onSubmit }) {
    
    // Form input values in state
    const [ titleInput, setTitleInput ] = useState('');
    const [ descInput, setDescInput ] = useState('');
    const [ statusInput, setStatusInput ] = useState('active');

    const handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh

        const newTask = { // constructing new task (id will be added in parent)
            title: titleInput,
            description: descInput,
            status: statusInput
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
                        name="status"
                        value="active"
                        checked={ statusInput === "active" }
                        onChange={ (event) => setStatusInput(event.target.value) }
                    />
                    Active
                </label>
                <label>
                    <input 
                        type="radio"
                        name="status"
                        value="pending"
                        checked={ statusInput === "pending" }
                        onChange={ (event) => setStatusInput(event.target.value) }
                    />
                    Pending
                </label>
                <label>
                    <input 
                        type="radio"
                        name="status"
                        value="complete"
                        checked={ statusInput === "complete" }
                        onChange={ (event) => setStatusInput(event.target.value) }
                    />
                    Complete
                </label>
            </div>

            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;