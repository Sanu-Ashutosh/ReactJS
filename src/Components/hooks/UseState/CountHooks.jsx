import { useState } from "react";

import "./CountHooks.css"
let CountHooks = () => {
    let [count, setCount] = useState(0);
    let [step, setStep] = useState('');

    let HandelIncrement = () => {
        setCount(count + Number(step));
    };

    let HandelDecrement = () => {
        setCount(count - Number(step));
    };

    let HandelReset = () => {
        setCount(0);
        setStep('');
    };

    let HandelSteps = (event) => {
        setStep(event.target.value);
    };



    return (
        <div>
            <div className="container">
                <h1>Use State Challenge</h1>

                <div className="count">
                    <h3>Count: <span>{count}</span></h3>
                </div>

                <div className="steps">
                    <h3>Steps:</h3>
                    <input
                        type="number"
                        placeholder="Enter step here"
                        value={step}
                        onChange={HandelSteps}
                    />
                </div>

                <div className="button">
                    <button onClick={HandelIncrement} disabled={count >= 100}>Increment</button>
                    <button onClick={HandelDecrement} disabled={count <= 0}>Decrement</button>
                    <button onClick={HandelReset} >Reset</button>
                </div>
            </div>
        </div>
    );
};

export default CountHooks;
