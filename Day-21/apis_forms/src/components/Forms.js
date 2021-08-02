import { useState } from "react";

const Form = () => {
    const [name, setName]= useState("");
    const [password, setPassword]= useState();
    const [fullName, setFullName]= useState();

    const inputEvent=(event)=>{
        console.log(event.target.value); //event is the argument and an object. .target.value returns whatever we are typing
        setName(event.target.value);
    }
    const inputEvent1=(e)=>{
        setPassword(e.target.value);
    }
    const display=()=>{
        setFullName(name);
    }
    /* after full completion of filling of form h1 is displayed*/
    /*placeholder is that dull text written in an input field when no input is entered */
    /*on calling inputEvent fn whatever we type is printed*/
    //value HAS to be written if we write onChange because otherwise it becomes read only

    return (
        <div>
            <h1>Form handling completed of {fullName}</h1> 
            
            <input type="text" placeholder="enter your name" 
            onChange={inputEvent} 
            value={name}
            >        
            </input>
            <br />

            <input type="password" placeholder="enter your password"
            onChange={inputEvent1}
            value={password}
            >        
            </input><br/>
            <button onClick={display} value={fullName}>Submit</button>
        </div>
        
    )
}

export default Form;