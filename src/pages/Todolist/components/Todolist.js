import './Todolist.css';
import React, { useState } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import AddTaskButton from './AddTaskButton';

function Todolist() {

    // State values
    const [ tasks, setTasks ] = useState([]); // tasks in todolist - array of objects
    const [ isAddingTask, setAddingTask ] = useState(false); // boolean value, if user is currently adding task (form open)

    // Task handler functions
    const addTask = (newTask) => {
        const newTaskList = tasks.push(newTask);
        setTasks(newTaskList);
    }
    const removeTask = (taskToRemove) => {
        const newTaskList = tasks.filter(task => task.title !== taskToRemove.title);
        setTasks(newTaskList);
    }

    // TODO: make editTask function

    return (
        <div id="todolist">
            {tasks.map((task) => {
                return (
                    <Task 
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