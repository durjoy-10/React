import { useState } from "react"
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function LiftingStateUp() {
  const [user,setUser]=useState('')
  return (
    <div>
     <h1 className="heading"> Lifting State Up in React.js </h1>
     <AddUser setUser={setUser} />
     <DisplayUser  user={user}/>
    </div>

  );
}
export default LiftingStateUp;