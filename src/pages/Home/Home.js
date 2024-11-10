
import "./Home.css"
import React from 'react';

function Home() {

    const [count, setCount] = React.useState(0);

    return (
        <main className="main">
            <h1>Home Page</h1>

            <button onClick={() => setCount(count + 1)} type="button">Click me!</button>
            <p>{count}</p>
        </main>
    );
}

export default Home;