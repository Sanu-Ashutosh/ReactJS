import { createContext } from "react";


export const BioContext=createContext();

export const BioProvider =({children})=>{

    let obj={
        name:"John Doe",
        age:30,
        occupation:"Software Engineer",
        address:`At/po : Kalapathar, Cuttack,odisha,754009`
    }

    return <BioContext.Provider value={obj}>
        {children}
    </BioContext.Provider>
}