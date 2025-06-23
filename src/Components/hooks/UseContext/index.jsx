import { use } from "react"
import { BioContext } from "./UseContextStore";

export const Home = () => {

    const { name, age, occupation, address } = use(BioContext);

    return <>
        <h1>Hii my Name is { name}.I am from "{ address}".Age {age }.Occupation {occupation }</h1>
    </>
}