const Receipt = ({ person, order, paid }) => {
    !paid?paid='No':paid='Yes'
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
                <div>
                    Paid: {paid}
                </div>
            </div>
        </div>
    )
}
export default Receipt