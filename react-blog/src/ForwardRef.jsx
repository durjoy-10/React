import { useRef } from "react";
import UserInput from "./UserInput";

function ForwardRef () {
  const inputRef=useRef(null)

  const updateInput=()=>{
   inputRef.current.value=1000;
   inputRef.current.focus();
   inputRef.current.style.color="red"
    
  }
  return (
    <>
      <h1>Forward Ref</h1>
      <UserInput ref={inputRef} />
      <button onClick={updateInput}>Update Input field</button>
  
    </>
  )

}

export default ForwardRef;