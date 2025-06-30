import React, { useMemo, useState } from "react";

const ChildComponent = () => {
    console.log("Child component render");
    let sum = () => {
        let i=0;
        for (let index = 0; index < 100000000; index++) {

            i += index;
        }
        return i;
    }

   let total= useMemo(() => {
      return  sum();
    }, []);
    return (
        <>
            <h1>Total sum is {total}</h1>
        </>
    );
};




let UseMemo = () => {

    let [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>{setCount((prv)=>prv+1)}} >Increment</button>
            <ChildComponent />
        </>
    );
}

export default UseMemo;