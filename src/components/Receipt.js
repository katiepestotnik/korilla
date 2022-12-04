import { useState} from 'react'
import Button from './Button'

const Receipt = ({ person, order, paid, payment }) => {
    !paid ? paid = 'No' : paid = 'Yes' 
    let paidToggle = paid
    const [toggle, setToggle] = useState(paidToggle)
    const handleClick = (e) => {
        console.log( 'paid=',paid, 'toggle=',toggle)
        if (toggle === 'Yes') {
            setToggle('No')
            console.log( 'paid=',paid, 'toggle=',toggle)
        }
        else if (toggle === 'No') {
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