import React, { useState } from 'react';

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

            <label className="priority-range">
                <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={newPriorityInput}
                    onChange={ (event) => setNewPriority(event.target.value) }
                    className='priority-range-input'
                /> 
                <span className="priority-label">
                    <span >1 <i>(low)</i></span>
                    <span style={
                        {
                            fontWeight: "600", 
                            paddingLeft: "calc(12px + 0.2vw)"
                        }
                    }> Priority: {newPriorityInput}</span>
                    <span>10 <i>(high)</i></span>
                </span>
            </label>

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