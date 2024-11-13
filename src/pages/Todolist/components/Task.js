import React from 'react';

function Task(props) {
    const { title, description, status } = props;

    return (
        <div class={`todolist-item status-${status}`}>
            <h2 class="todolist-item-title">{title}</h2>
            <p class="todolist-item-desc">{description}</p>
        </div>
    );
}

export default Task;