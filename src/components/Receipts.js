import Receipt from "./Receipt"

const Receipts = ({ receiptArr }) => {
    const singleReceipt = receiptArr.map((ele, idx) => {
        return (
            <Receipt
                {...ele}
                key={idx}
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