import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM.render(
//     <h1>Hello World!!!!</h1>, document.getElementById('root')

// );

function Print(){
    return (
        <div>
            <h1>
                 Hello world
            </h1>
            <h1>
                !!!!
            </h1>
        </div>    
    );
}

ReactDOM.render(<Print></Print>, document.getElementById('root'));
console.log("hello");