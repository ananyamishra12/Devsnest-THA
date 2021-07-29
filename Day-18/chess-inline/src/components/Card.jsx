function Card({number}){
    return(
        <div className="box" style= {{backgroundColor: ((number%2===0)?'white': 'black')}}></div>
    )
}

export default Card;