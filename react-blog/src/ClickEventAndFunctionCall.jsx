function ClickEventAndFunctionCall() {

    function callFun() {
        alert("Button clicked!");
    }

    function fruit(name) {
        alert(name);
    }

    return (
        <div>
            <h1>Click Event and Function Call</h1>

            <button onClick={callFun}>Click me</button>

            <button onClick={() => fruit("apple")}>Apple</button>
            <button onClick={() => fruit("banana")}>Banana</button>
            <button onClick={() => fruit("orange")}>Orange</button>
        </div>
    )
}

export default ClickEventAndFunctionCall;