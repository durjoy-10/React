import { useState } from "react";

function ControlledComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form action="" method="get">
                <input type="text" value={name} placeholder="Enter Name:" onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input type="email" value={email} placeholder="Enter Email:" onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <input type="password" value={password} placeholder="Enter Password:" onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <button type="submit">Submit</button>
                <br /><br />
                <button type="button" onClick={() => {setName(""); setEmail(""); setPassword("")}}>Clear</button>
                <br /><br />        
                <h2>{name}</h2>
                <h2>{email}</h2>
                <h2>{password}</h2>
            </form>
        </div>
    )
}

export default ControlledComponent;