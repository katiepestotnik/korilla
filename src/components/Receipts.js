import Receipt from "./Receipt"

const Receipts = ({ receiptArr, payment }) => {
    const singleReceipt = receiptArr.map((ele, idx) => {
        return (
            <Receipt
                {...ele}
                key={idx}
                payment={payment}
            />
        )
    })
    return (
        <div className='container'>
            {singleReceipt}
        </div>
    )
}
export default Receipts