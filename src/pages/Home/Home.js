
import "./Home.css"
import React from 'react';

function Home() {

    return (
        <main className="main">
            <section id="home-page">
                <h1 id="home-header">Todolist App</h1>
                <p id="made-by">made by Callum Burgoyne</p>
                <p id="description">
                    This is a Todolist app built using the React JS framework. It allows you to keep
                    track of tasks, edit and remove them, and check them once complete!
                </p>
            </section>
        </main>
    );
}

export default Home;