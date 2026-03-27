import { useState } from "react";
function InputFieldValue() {
  const [value, setValue] = useState("");

  return (
    <div>
      {/* <h1>Input Field Value</h1> */}
      <input 
        type="text" 
        placeholder="Enter something..." 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>{value}</h1>
      <button onClick={() => setValue("")}>clear</button>
    </div>
  )
}

export default InputFieldValue;