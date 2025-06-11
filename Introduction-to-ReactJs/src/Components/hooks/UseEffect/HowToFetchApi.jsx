import { useEffect, useState } from "react";
import "./HowNotToFetchAPI.css"; // Make sure this path is correct
import LoadingSpinner from "./LoadingSpinner";

export let HowToFetchAPI = () => {
    const [apiData, setApiData] = useState([]);

    //first way using promise
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((data) => setApiData(data))
    //         .catch((error) => console.log(error)
    //         );
    // },)

    //second way using async/await with outside function

    let fetchApi = async () =>{
        try {
           let apiRes= await fetch("https://jsonplaceholder.typicode.com/posts");
           let data= await apiRes.json();
           setApiData(data);
        } catch (error) {
            console.log(error);
                     
        }
    }

    useEffect(()=>{
         fetchApi();
    },[])



    if (apiData.length == 0)
        return (
            <div>
                <LoadingSpinner />
                <LoadingSpinner />
                <LoadingSpinner />
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
