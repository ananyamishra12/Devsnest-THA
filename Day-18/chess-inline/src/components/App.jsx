import Card from "./Card";
function App()
{
    //let row = [1,2];
    let arr=[];

    for(var i=0; i<8; i++)
    {
      arr.push(i); // [0, 1, 2 , 3 , 4 , 5 , 6, 7]
    }
  
  return (
    <div className="App">
      <div className="board">
        {
          arr.map(items =>  //items is the index
            <Card number={items} />)
        }
        {
          arr.map(items => 
            <Card number={items+1} />)
        }
        {
          arr.map(items => 
            <Card number={items} />)
        }
        {
          arr.map(items => 
            <Card number={items+1} />)
        }
        {
          arr.map(items => 
            <Card number={items} />)
        }
        {
          arr.map(items => 
            <Card number={items+1} />)
        }
        {
          arr.map(items => 
            <Card number={items} />)
        }
        {
          arr.map(items => 
            <Card number={items+1} />)
        }
      </div>

    </div>
  );
}

export default App;