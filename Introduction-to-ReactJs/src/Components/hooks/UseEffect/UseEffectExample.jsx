import { useEffect, useState } from "react";

let UseEffectExample = ()=>{

    let [date,setDate] = useState(0);



    useEffect(()=>{
        setInterval(() => {
            let updatedDate= new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000);
    },[date])
    

    return<>
        <h1>
            {date}
        </h1>
    </>
}
export default UseEffectExample;