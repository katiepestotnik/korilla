import { useState } from 'react'
const Receipt = ({ person, order, paid }) => {
    !paid ? paid = 'No' : paid = 'Yes'  
    const [clear, setClear] = useState(paid)
    const handleClick = () => {
        if(paid)setClear('Yes') 
        else setClear('No')
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
                <button onClick={handleClick}>
                    Paid: {clear}
                </button>
            </div>
        </div>
    )
}
export default Receipt