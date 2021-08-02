import { useState } from "react";

function Editbox(){
    const [food, setFood]= useState("");
    const [foodFinal, setFoodFinal]= useState("");
    const [calorie, setCalorie]= useState("");
    const [calorieFinal, setCalorieFinal]= useState("");
    const inputEvent =(e)=>{
        setFood(e.target.value)
    }
    const calorieInput= (ev) =>{
        setCalorie(ev.target.value);
    }
    const onSubmitfn=(event)=>{
        event.preventDefault();
        setFoodFinal(food);
        setCalorieFinal(calorie)
    }
    return <div className="container">
        
        <form onSubmit={onSubmitfn}>
            <input type="text" placeholder="enter food item" onChange={inputEvent} value={food}>

            </input>
            <input type="number" placeholder="enter calories intake" onChange={calorieInput} value={calorie}>

            </input>
        </form>
        <button type="submit" onClick={onSubmitfn}>Submit</button>
        //pass props of all states
    </div>
}

export default Editbox;