import Card from "./components/Card"
import {useState} from "react"
import Food from "./components/Food"

function App(props) {
    const [foods, setFood] = useState([
        <Card tittle="Pizza" calorie="60" />,
        <Card tittle="Burger" calorie="69" />,
        <Card tittle="Coke" calorie="600" />,
        <Card tittle="Dosa" calorie="800" />,
        <Card tittle="Apple" calorie="50" />,
        <Card tittle="Rice" calorie="90" />,
        <Card tittle="Brownie" calorie="180" />,
        <Card tittle="Fried Rice" calorie="90" />,
        <Card tittle="Pani Puri" calorie="10" />   
    ]);
    return (
      <div className="App">
        
        <div className="container">
          {
            foods.map((food,index)=>(
              <Food key={index} food={food} foods={foods} setFood={setFood} index={index}/>
            ))
          }
        </div>
  
      </div>
    );
  }

export default App;