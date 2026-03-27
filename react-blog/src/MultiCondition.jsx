import { useState } from "react";

function MultiCondition() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1> Multiple Counter(condition) in React Js</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <h1>count : {count}</h1>
            {
                count < 0 ? <h1>{neg}</h1> 
                :count === 0 ? <h1>{Zero}</h1> 
                :count > 0 ? <h1>Positive Number</h1> 
                :null
            }

        </div>
    )
}

const Zero = "Zero Number"
const neg = "Negative Number"

export default MultiCondition;