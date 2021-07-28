import Card from "./components/Card"
function App()
{
    return(
        <div className= "body">
            
            <div className= "container">
            
            <Card h1="Pizza" h2="you have consumed 256 cals today"></Card>,
            <Card h1="Apple" h2="you have consumed 52 cals today"></Card>,
            <Card h1="Pie" h2="you have consumed 237 cals today"></Card>,
            <Card h1="Ice-cream" h2="you have consumed 206 cals today"></Card>,
            <Card h1="Burger" h2="you have consumed 295 cals today"></Card>,
            <Card h1="Lemonade" h2="you have consumed 40 cals today"></Card>
        </div>
        </div>
        
    
    )
    
    
}

export default App;