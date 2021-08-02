function Displaybox(){
    return <div className="printDiv">
    {foodFinal}
    You have consumed {calorieFinal} calories
    <button className="edit" onClick={
        <input type="text" placeholder={food} onChange={inputEvent} value={food}>

        </input>
    }>edit</button>
    <button className="delete">delete</button>
</div>
}

export default Displaybox;