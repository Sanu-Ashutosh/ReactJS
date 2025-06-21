import { useId } from "react";


 let  UseIDExp = ()=>{

    let id= useId();

    let HandelHover= ()=>{
        console.log(id);
    }

    return (
        <>
        <h1 onMouseEnter={HandelHover} id={`${id}heading`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eius.</h1>

        <h2 id={useId()}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, amet!</h2>
        <h2 id={useId()}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, amet!</h2>
        <h2 id={useId()}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, amet!</h2>
        <h2 id={useId()}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, amet!</h2>
        <h2 id={useId()}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, amet!</h2>
        </>
    );
}

export default UseIDExp;