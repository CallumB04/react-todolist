import './Todolist.css';
import React, { useState, useEffect } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import AddTaskButton from './AddTaskButton';
import ClearTasksButton from './ClearTasksButton';
import EditTaskForm from './EditTaskForm';

function Todolist() {

    // State values
    const [ tasks, setTasks ] = useState([]); // tasks in todolist - array of objects
    const [ isAddingTask, setAddingTask ] = useState(false); // boolean value, if user is currently adding task (form open)
    const [ nextTaskID, setNextTaskID ] = useState(0); // increments with every task, ensures none have the same ID

    // Loading todolist from localStorage whenever component mounts
    useEffect(
        () => {
            // loading todolist, or an empty array if todolist doesnt exist in localStorage
            const todolist = JSON.parse(localStorage.getItem("todolist")) || [];

            // if localStorage contains tasks, set to state values
            if (todolist.length) { 
                setTasks(todolist); 

                // finds the highest ID of a task, and starts incrementing from that point
                // ensure's no ID's overlap after refreshing the page
                const maxTaskID = Math.max(0, ...todolist.map(task => task.id));
                setNextTaskID(maxTaskID + 1);
            }
        }, []
    );

    // Save todolist to localStorage whenever changes are made
    useEffect(
        () => {
            localStorage.setItem("todolist", JSON.stringify(tasks));
        }, [tasks]
    );

    /* Task handler functions */
    
    // Adds a new task to todolist
    const addTask = (newTask) => {
        const newTaskList = [...tasks, newTask];
        setTasks(newTaskList);
        incrementTaskID();
    };
    // Remove task from the todolist, using a given ID
    const removeTask = (taskToRemove) => {
        const newTaskList = tasks.filter(task => task.id !== taskToRemove.id);
        setTasks(newTaskList);
    };
    // Sets an active task as complete
    const completeTask = (taskToComplete) => {
        const newTaskList = tasks.map(task => {
            if (task.id === taskToComplete.id) { task.completed = true; }
            return task;
        })
        setTasks(newTaskList);
    };
    // Edits a task in the todolist with new given values
    // Also currently removes completed after making changes
    const editTask = (newTask) => {
        const { title, description, priority, completed, id } = newTask;

        const newTaskList = tasks.map(
            (task) => {
                if (task.id === id) {
                    task.title = title;
                    task.description = description;
                    task.priority = priority;
                    task.completed = completed; 
                    task.editing = false;
                } return task;
            }
        );

        setTasks(newTaskList);
    };
    // Sets task to open, increasing height and showing more information
    const openTask = (taskToOpen) => {
        const newTaskList = tasks.map(task => {
            if (task.id === taskToOpen.id) { task.open = !task.open; }
            else { task.open = false; }
            return task;
        })
        setTasks(newTaskList);
    };
    // Empties the todolist
    const clearTasks = () => {
        setTasks([]);
    };

    // Functions to switch between displaying 'Add new Task' button and the Task adding form
    const startAddingTask = () => {
        setAddingTask(true);
        cancelEditingTask();
    };
    const finishAddingTask = () => {
        setAddingTask(false);
    };

    // Displays an editing form instead of the task of a given ID
    // Allows for user to cancel or submit changes, then displaying the task again
    const startEditingTask = (taskToEdit) => {
        const newTaskList = tasks.map(
            (task) => {
                if (task.id === taskToEdit.id) {
                    task.editing = true;
                } else {
                    task.editing = false;
                }
                return task;
            }
        );
        setTasks(newTaskList);
        setAddingTask(false); // closes add task form if user chooses to edit existing task
    };
    // Closes the task editing form
    const cancelEditingTask = () => {
        const newTaskList = tasks.map(
            task => { 
                task.editing = false;
                return task;
            }
        )
        setTasks(newTaskList);
    };

    // Function to increase task ID when new task is added
    const incrementTaskID = () => {
        setNextTaskID(nextTaskID + 1);
    };

    // Function passed to add task form, called when form is submitted
    // Adds new task to todolist and closes the form
    const handleFormSubmit = (newTask) => {
        newTask.id = nextTaskID;
        addTask(newTask);
        finishAddingTask();
    };

    return (
        <div id="todolist">
            {tasks.map((task) => {
                return !task.editing ? (
                    <Task 
                        key={task.id}
                        id={task.id}
                        title={task.title} 
                        description={task.description}
                        priority={task.priority}
                        completed={task.completed}
                        open={task.open}
                        editing={task.editing}
                        removeTask={removeTask}
                        completeTask={completeTask}
                        openTask={openTask}
                        startEditingTask={startEditingTask}
                    />
                )
                : (
                    <EditTaskForm 
                        key={task.id}
                        id={task.id}
                        title={task.title} 
                        description={task.description}
                        priority={task.priority}
                        editTask={editTask}
                        cancelEditingTask={cancelEditingTask}
                    />
                );
            })}
            
            {
                isAddingTask 
                ? <AddTaskForm onSubmit={handleFormSubmit} cancelAddingTask={finishAddingTask}/> 
                : <AddTaskButton onClick={startAddingTask}/>
            }
            {
                tasks.length > 0
                ? <ClearTasksButton onClick={clearTasks}/>
                : null
            }
            
        </div>
    );
    
}

export default Todolist;