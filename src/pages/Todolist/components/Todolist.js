import './Todolist.css';
import React, { useState } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import AddTaskButton from './AddTaskButton';

function Todolist() {

    // State values
    const [ tasks, setTasks ] = useState([]); // tasks in todolist - array of objects
    const [ isAddingTask, setAddingTask ] = useState(false); // boolean value, if user is currently adding task (form open)
    const [ nextTaskID, setNextTaskID ] = useState(1);

    // Task handler functions
    // TODO: make editTask function
    const addTask = (newTask) => {
        const newTaskList = [...tasks, newTask];
        setTasks(newTaskList);
    };
    const removeTask = (taskToRemove) => {
        const newTaskList = tasks.filter(task => task.id !== taskToRemove.id);
        setTasks(newTaskList);
    };

    // function to increase task ID when new task is added
    const incrementTaskID = () => {
        setNextTaskID(nextTaskID + 1);
    };

    return (
        <div id="todolist">
            {tasks.map((task, index) => {
                return (
                    <Task 
                        key={task.id}
                        id={task.id}
                        title={task.title} 
                        description={task.description}
                        status={task.status}
                    />
                );
            })}

            {isAddingTask ? <AddTaskForm /> : <AddTaskButton />}
        </div>
    );
    
}

export default Todolist;