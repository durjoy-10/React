// Also known as hide and show, or on and off.

import { useState } from "react";

function Toggle() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <h1> -------Toggle In React JS --------</h1>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display ? <h1> {users.name}, {users.age}, {users.city}</h1> : null}
        </div>
    )

}


const users = {
    name:"John",
    age:30,
    city:"New York"
}

export default Toggle;