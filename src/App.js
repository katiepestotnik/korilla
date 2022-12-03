import Form from "./components/Form";
import { useState } from "react";

import Receipts from "./components/Receipts";
import receiptsArr from "./receiptData";


function App() {
  const [receipt, setReceipt] = useState(receiptsArr)
  const [name, setName] = useState('')
  return (
    <>
      <div>
        <h1 className="title">Korilla Receipts</h1>
        <Form name={name} />
      </div>
      <main>
        <Receipts receiptArr={receipt} />
      </main>
    </>

  );
}

export default App;
