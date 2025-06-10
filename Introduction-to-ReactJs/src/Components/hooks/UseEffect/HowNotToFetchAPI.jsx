import { useEffect, useState } from "react";
import "./HowNotToFetchAPI.css"; // Make sure this path is correct
import LoadingSpinner from "./LoadingSpinner";

export let HowNotToFetchAPI = () => {
    const [apiData, setApiData] = useState([]);



    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setTimeout(() => {
                setApiData(data);
            }, 1000);
        })
        .catch((error) => console.log(error));

    if (apiData.length == 0)
        return (
            <div>
                <LoadingSpinner />
            </div>
        );

    return (
        <div className="api-container">
            <h1 className="title">API Data</h1>
            <ul className="post-list">
                {apiData.map((curEle) => (
                    <li className="post-card" key={`post-${curEle.id}`}>
                        <h2>ID: {curEle.id}</h2>
                        <p><strong>User ID:</strong> {curEle.userId}</p>
                        <p><strong>Title:</strong> {curEle.title}</p>
                        <p><strong>Body:</strong> {curEle.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
