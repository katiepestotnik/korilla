import { useState} from 'react'
import Button from './Button'

const Receipt = ({ person, order, paid }) => {
    !paid ? paid = 'No' : paid = 'Yes'  
    const [toggle, setToggle] = useState(paid)
    const handleClick = (e) => {
        console.log( 'paid=',paid, 'toggle=',toggle)
        if (paid === 'Yes') {
            paid = 'No'
            setToggle('No')

            console.log( 'paid=',paid, 'toggle=',toggle)
        }
        else if (paid === 'No') {
            paid = 'Yes'
            //not setting
            setToggle('Yes')

            console.log( 'paid=',paid, 'toggle=',toggle)
        }
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