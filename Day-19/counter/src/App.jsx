import React from "react";
import {useState, useEffect} from "react";
function App({props}){
    const [count, setCount]=useState(0);
    const [count1, setCount1]=useState(0);

    useEffect(()=>{
        console.log("update");
    })
    return <div className="app">
        <button onClick={ ()=>{
            const c=count+1;
            setCount(c);                
            }}>
                {count}        
        </button>
        <button onClick={ ()=>{
            const c1=count1+1;
            setCount1(c1);
                console.log(c1);
            }}>
                {count1}        
        </button>
    </div>
}

export default App;