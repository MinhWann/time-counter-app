import React, { useState } from "react";
import "./App.css";

function App() {
    const [count , setCount] = useState(0);
    
    const increase = () => setCount(count + 1);

    const decrease = () => setCount(count - 1);

    const reset = () => setCount(0);
    return (
        <div className="container">
            <h1>Counter</h1>
            <span id="value">{count}</span>
            <div className="btn-group">
                <button onClick={decrease} className="btn btn-decrease">DECREASE</button>
                <button onClick={reset} className="btn btn-reset">RESET</button>
                <button onClick={increase} className="btn btn-increase">INCREASE</button>
            </div>
        </div>
    );
}

export default App;