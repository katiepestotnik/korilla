import { useState } from 'react'
const Form = ({ filterReceipts }) => {
    const [input, setInput] = useState('')
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        filterReceipts(input)
        setInput('')
    }
    return (
        <div className="form">
            <input
                placeholder='Customer Name'
                value={input}
                onChange={handleChange}
                name='search'
            />
            <button onClick={handleClick}>SEARCH</button>
        </div>

    )
}
export default Form