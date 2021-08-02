const Form = () => {
    return (
        <form>
            <h1>create account</h1>
            <label>
                Email:
                <input type="text" value={email}></input>
            </label>
        </form>
    )
}

export default Form;