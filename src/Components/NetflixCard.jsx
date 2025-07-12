let NetflixCard = (props) => {
    //Object destructuring
    let { item } = props;

    let HandelSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        alert("I am onClick event")
    }



    return (
        <div className="card" key={item.key}>
            {/* {console.log(item.id)} */}
            <img src={`/images/${item.img_url}`} alt={item.name} height="40%" width="100%" />
            <div className="card-content">
                <div><strong>Name :</strong> {item.name}</div>
                <div><strong>Rating :</strong><span className={`rating ${item.rating >= 8.5 ? "super_hit" : "average"}`}>{item.rating}</span></div>
                <div><strong>Description :</strong> {item.description}</div>
                <div><strong>Cast :</strong> {item.cast}</div>
                <div><strong>Genre :</strong> {item.genre}</div>
                <div>
                    <a href={item.watch_url} target="_blank" rel="noopener noreferrer">
                        <button>Watch Now</button>
                    </a>
                </div>
                <div>
                    <input type="email" name="email" id="eml" />
                    <button onClick={HandelSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );


}

export default NetflixCard;