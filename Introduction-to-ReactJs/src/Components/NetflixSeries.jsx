import jsonDate from "../Api/Data.json";
import './Netflix.css';
import NetflixCard from "./NetflixCard";

let Netflix = () => {
    return (
        <div className="container">
            {
                jsonDate.map((item, index) => (
                   <NetflixCard key={item.id} item={item} />
                  
                )) 
            }
        </div>
    );
};

export default Netflix;
