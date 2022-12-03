import { useState } from 'react'
import Button from './Button'
const Receipt = ({ person, order, paid }) => {
    !paid ? paid = 'No' : paid = 'Yes'  
    const [toggle, setToggle] = useState(paid)
    const handleClick = () => {
        if(paid)setToggle('Yes') 
        else setToggle('No')
    }
    return (
        <div className='single'>
            <h1>{person}</h1>
            <h3>{order.main}</h3>
            <hr />
            <div>
                <div>
                    Protein: {order.protein}
                </div>
                <div>
                    Rice: {order.rice}
                </div>
                <div>
                    Sauce: {order.sauce}
                </div>
                <div>
                    Drink: {order.drink}
                </div>
                <div>
                    Cost: {order.cost}
                </div>
                <button className='toggler' onClick={handleClick}>
                    Paid: {toggle}
                </button>
            </div>
        </div>
    )
}
export default Receipt