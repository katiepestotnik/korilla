import Form from "./components/Form";
import { useState } from "react";

import Receipts from "./components/Receipts";
import receiptsArr from "./receiptData";


function App() {
  const [receipt, setReceipt] = useState(receiptsArr)
  const filterReceipts = (input) => {
    const filtered = receiptsArr.filter((ele) => ele.person === input)
    if (input === '')setReceipt(receiptsArr)
    else setReceipt(filtered)
  }
  return (
    <>
      <div>
        <h1 className="title">Korilla Receipts</h1>
        <Form filterReceipts={filterReceipts}/>
      </div>
      <main>
        <Receipts receiptArr={receipt}/>
      </main>
    </>

  );
}

export default App;
