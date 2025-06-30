import { useReducer } from "react"
import CountHooks from "../UseState/CountHooks";


let UseReducerComp =()=>{

    //for large project we can take an object inside there are lots of initial value for different datatype.And it will gives flexible 
    let initialstates={
        count:0,
        inc:2,
        dec:2
    }
    
    let reducer =(state,action)=>{
        console.log(state);
        
        if(action.type==="INCREMENT"){
         return   {...state,count:state.count+state.inc};
        }
        if(action.type==="DECREMENT"){
         return    {...state,count:state.count-state.dec};
        }
    }
    let [state,dispatch] = useReducer(reducer,initialstates);

    return<>
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        </div>

        <CountHooks/>
    </>
}

export default UseReducerComp;