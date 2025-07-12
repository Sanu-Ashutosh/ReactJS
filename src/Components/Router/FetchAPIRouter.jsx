import { useState } from "react";

let FetchAPIRouter = () => {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  const API = `http://www.omdbapi.com/?i=tt3896198&apikey=7b509e6a&s=titanic&Page=1`;

  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.Response === "True") {
        setApiData(data);
        setError(null);
      } else {
        setApiData(null);
        setError(data.Error || "Failed to fetch data");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching data.");
    }
  };

  return (
    <>
      <button onClick={fetchData}>Click</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {apiData?.Search?.map((movie) => (
            <li key={movie.imdbID} style={{ marginBottom: "1.5em" }}>
              <ul>
                <li>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    width="100"
                    style={{ borderRadius: "4px" }}
                  />
                </li>
                <li><strong>Title:</strong> {movie.Title}</li>
                <li><strong>Year:</strong> {movie.Year}</li>
                <li><strong>Type:</strong> {movie.Type}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FetchAPIRouter;
