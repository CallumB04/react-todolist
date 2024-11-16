import './Todolist.css';
import React, { useState, useEffect } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import AddTaskButton from './AddTaskButton';
import ClearTasksButton from './ClearTasksButton';

function Todolist() {

    // State values
    const [ tasks, setTasks ] = useState([]); // tasks in todolist - array of objects
    const [ isAddingTask, setAddingTask ] = useState(false); // boolean value, if user is currently adding task (form open)
    const [ nextTaskID, setNextTaskID ] = useState(0);

    // Loading todolist from localStorage whenever component mounts
    useEffect(
        () => {
            const todolist = JSON.parse(localStorage.getItem("todolist")) || [];

            // if localStorage contains tasks, set to state values
            if (todolist.length) { 
                setTasks(todolist); 

                // ensures no ID's overlap
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

    // Task handler functions
    // TODO: make editTask function
    const addTask = (newTask) => {
        const newTaskList = [...tasks, newTask];
        setTasks(newTaskList);
        incrementTaskID();
    };
    const removeTask = (taskToRemove) => {
        const newTaskList = tasks.filter(task => task.id !== taskToRemove.id);
        setTasks(newTaskList);
    };
    const completeTask = (taskToComplete) => {
        const newTaskList = tasks.map(task => {
            if (task.id === taskToComplete.id) { task.completed = true; }
            return task;
        })
        setTasks(newTaskList);
    };
    // const editTask = (newTask) => {
    //     const { title, description, priority, completed, id } = newTask;

    //     const newTaskList = tasks.map(
    //         (task) => {
    //             if (task.id === id) {
    //                 task.title = title;
    //                 task.description = description;
    //                 task.priority = priority;
    //                 task.completed = completed; 
    //             } return task;
    //         }
    //     );

    //     setTasks(newTaskList);
    // };
    const openTask = (taskToOpen) => {
        const newTaskList = tasks.map(task => {
            if (task.id === taskToOpen.id) { task.open = !task.open; }
            else { task.open = false; }
            return task;
        })
        setTasks(newTaskList);
    };
    const clearTasks = () => {
        setTasks([]);
    };

    // functions to switch between task add button and form
    const startAddingTask = () => {
        setAddingTask(true);
    };
    const finishAddingTask = () => {
        setAddingTask(false);
    };

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
    };

    // function to increase task ID when new task is added
    const incrementTaskID = () => {
        setNextTaskID(nextTaskID + 1);
    };

    const handleFormSubmit = (newTask) => {
        newTask.id = nextTaskID;
        addTask(newTask);
        finishAddingTask();
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
                        priority={task.priority}
                        completed={task.completed}
                        open={task.open}
                        editing={task.editing}
                        removeTask={removeTask}
                        completeTask={completeTask}
                        openTask={openTask}
                        startEditingTask={startEditingTask}
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