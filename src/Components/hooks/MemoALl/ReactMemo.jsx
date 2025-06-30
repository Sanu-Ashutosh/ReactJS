import React, { useState } from "react";

const ChildComponent = React.memo(() => {
    console.log("Child component render");
    return (
        <>
            <h1>Hiiii</h1>
        </>
    );
});




let ReactMemo =()=>{

    let [count,setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}} >Increment</button>
            <ChildComponent/>
        </>
    );
}

export default ReactMemo;