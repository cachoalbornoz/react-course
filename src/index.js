import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
    return <div>

        <h1>Este es un componente de React</h1>
        <p>Este es un parrafo de React</p>

    </div>
}



root.render(
    <div>
        <Greeting />
        <Greeting />
        <Greeting />
        <Greeting />
    </div>

);
