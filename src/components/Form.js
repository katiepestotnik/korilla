const Form = ({name}) => {
    return (
        <div className="form">
            <input placeholder='Customer Name' value={name} />
            <button>SEARCH</button>
        </div>

    )
}
export default Form