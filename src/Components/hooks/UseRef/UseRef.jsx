import { useRef, useEffect } from "react";
// import ".../index.css"
let UseRef = ()=>{

   let inputRef= useRef("");

  let HandelFormSubmit=(event)=>{
    event.preventDefault();
        console.log(inputRef.current.value);
        
   }


    return<>

       <form onSubmit={HandelFormSubmit}>

       <input type="text" name="txt" id="txt" ref={inputRef} /><br />
       <button>Submit</button>
       </form>
        
    </>
}

export default UseRef;