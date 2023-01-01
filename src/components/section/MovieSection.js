import "./MovieSection.css";
import Movie from "../Movie";
import useFetch from "../hooks/useFetch";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const MovieSection = () => {
  const { loading, error, fetchedData } = useFetch(API_URL, null);
  
  const main = fetchedData.map((movieData) => {
    const { title, vote_average, overview, id, backdrop_path } = movieData;
    return (
      <Movie
        key={id}
        poster_path={backdrop_path}
        title={title}
        vote_average={vote_average}
        overview={overview}
      />
    );
  });

  
  return (
    <div>
    <div className="main">
      {loading ? <p>Loading...</p> : main}
      {error && <p>An Error Occoured</p>}
    </div>
    <div className="controls">
      <button>Prev</button>
      <button>Next</button>
    </div>
    </div>
  );
}
export default MovieSection;
