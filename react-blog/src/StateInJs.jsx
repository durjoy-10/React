import { useState } from "react";

function StateInJs() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <Fruit />
    </div>
  );
}


const Fruit = () => {

    const [fruit,changeFruit]=useState("Apple")

    return (
        <div>
            <h1>Fruit:{fruit}</h1>
            <button onClick={() => changeFruit("Banana")}>change fruit</button>
        </div>
    )

}

export default StateInJs;

