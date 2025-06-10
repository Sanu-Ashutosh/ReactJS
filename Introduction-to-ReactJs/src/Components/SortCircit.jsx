import { use, useState } from "react";

let SortCircuit = ()=>{

    let[user,setUser] =useState("");
    let[isLoggedIn,setIsLoggedIn]= useState(false);

    let handelSetUser =( )=>{

        setUser("Welcome Rahul");
    }

    let handelTogglestate = ()=>{
        // if(use) return
        setIsLoggedIn(!isLoggedIn);
        

    }


    return(
        <>
        <h1>Welcome to circuit</h1>
        <p>{setIsLoggedIn && user}</p>
        <p>{isLoggedIn && <p>you are LogedIn</p>}</p>
        <div className="buttons">
            <button onClick={handelTogglestate}>Toggle login state</button>
            <button onClick={handelSetUser}>Set user</button>
            <button onClick={()=>{setUser("")}}>clear user</button>
        </div>
        </>
    );
}

export default SortCircuit;