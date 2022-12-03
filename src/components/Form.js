import { useState } from 'react'
const Form = ({ filterReceipts }) => {
    const [input, setInput] = useState({
        search: ''
    })
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]:e.target.value })
    }
    return (
        <div className="form">
            <input
                placeholder='Customer Name'
                value={input.search}
                onChange={handleChange}
                name='search'
            />
            <button onClick={()=>filterReceipts(input.search)}>SEARCH</button>
        </div>

    )
}
export default Form