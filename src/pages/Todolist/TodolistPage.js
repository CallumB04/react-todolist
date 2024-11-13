import "./TodolistPage.css"
import React from 'react';
import Todolist from './components/Todolist';

function TodolistPage() {

    return (
        <main className="main">
            <h1>My Todolist</h1>
            <Todolist />
        </main>
    );
}

export default TodolistPage;