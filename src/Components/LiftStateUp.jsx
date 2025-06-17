import { useState } from "react";

let  LiftStateUp = () => {
    //State Lift Up from child to parent for sharing between childs
    
    let [input, setInput] = useState('');

    return (
        <>
            <InputComponent input={input} setInput={setInput} />
            <DisplayComponent input={input} />
        </>
    );
};
export default LiftStateUp;
let InputComponent = ({ input, setInput }) => {
    return (
        <div>
            <input type="email" name="email" id="eml" placeholder="Enter Your Email" value={input} onChange={(e)=>setInput(e.target.value)} />
        </div>
    );
}

let DisplayComponent = ({input}) => {
    return (
        <div>
            <h1>Email is<p>{input}</p></h1>
        </div>
    );
}