const Food = ({index, food, setFood, foods}) => {
    return(
      <div className="main">
        {food}
        <button onClick={() => {
              console.log("Delete = " , food);
              const newFoods = foods.filter((el,i) => i !== index);
              setFood(newFoods);
        }}>Delete</button>
      </div>
    );
  };

  export default Food;