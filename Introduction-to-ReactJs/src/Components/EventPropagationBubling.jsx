import React from "react";
import "./EventPropagation.css"; // Import external CSS file

let HandelChild = (event) => {
    event.stopPropagation();
    // setTimeout(() => {
        console.log("Child call");

    // }, 1000);
};

let HandelParent = (event) => {
    event.stopPropagation();
    // setTimeout(() => {
        console.log("Parent call");

    // }, 2000);
};

let HandelGrandParent = (event) => {
    event.stopPropagation();
    // setTimeout(() => {
        console.log("Grand Parent call");

    // }, 3000);

};

const EventPropagationUsingBubbling = () => {
    return (
        <section className="section">
            <div className="grandparent" onClick={HandelGrandParent}>
                Grandparent
                <div className="parent" onClick={HandelParent}>
                    Parent
                    <div className="child" onClick={HandelChild}>Child </div>
                </div>
            </div>
        </section>
    );
};

export default EventPropagationUsingBubbling;
