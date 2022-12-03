import { useState } from 'react'
const Form = ({ filterReceipts }) => {
    const [input, setInput] = useState('')
    return (
        <div className="form">
            <input
                placeholder='Customer Name'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={()=>filterReceipts(input)}>SEARCH</button>
        </div>

    )
}
export default Form