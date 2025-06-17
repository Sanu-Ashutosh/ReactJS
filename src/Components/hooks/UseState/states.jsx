import React, { useState } from 'react';
import './NumberCount.css'; // CSS we’ll add

const NumberCount = () => {
    const [count, setCount] = useState(0);
    // console.log(useState(0));
    console.log("Hii i am Parent");


    const handleIncrement = () => {
        setCount(count => count + 1);
    };

    return (<>
        <div className="container">
            <div className="number">
                <h1>{count}</h1>
            </div>
            <div className="inButton">
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </div>
        <ChildComponent />
    </>
    );
};

export default NumberCount;

export let ChildComponent = () => {
    console.log("Hii i am child");

    return <div className="child">Hii i am child</div>
}
export let Sibling = () => {
    console.log("Hii i am Sibling");

    return <div className="child">Hii i am Sibling</div>
}