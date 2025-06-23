import { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import "./SwitchMode.css"; // Make sure this matches your file path

const SwitchMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const HandelSwitch = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`container ${isDarkMode ? "dark" : "light"}`}>
            <h1>Welcome to Switch Component</h1>
            <h3>This side Ashutosh. <FaRegThumbsUp /></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi <a href="hjshhkjfsjk">Lorem, ipsum dolor.</a>
                commodi reprehenderit ullam, beatae veniam nesciunt. Enim earum
                voluptatem accusamus?
            </p>

            <div className="button">
                <button onClick={HandelSwitch}>
                    {isDarkMode ? (<span><MdLightMode /> </span>) : (
                        <span><MdNightlight /> </span>
                    )}
                </button>
                <div className="text">{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</div>
            </div>
        </div>
    );
};

export default SwitchMode;



export let Check1 = () => {
    let [switch1,setSwitch1] = useState("dark");

    let HandelClick = () => {
        setSwitch1 ( switch1 === "dark" ? "light" : "dark");
        console.log(switch1);
        
    }
    return <>
        <button onClick={HandelClick}>switch to {switch1 === "dark" ? "Light" : "dark"} mode</button>
    </>
}