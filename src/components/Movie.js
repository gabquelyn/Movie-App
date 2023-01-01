import "./Movie.css"
const Movie = (props) => {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    function getClassByRate(vote) {
        if(vote >= 8) {
            return 'green'
        } else if(vote >= 5) {
            return 'orange'
        } else {
            return 'red'
        }
    }
  return (
    <div className="movie">
      <img src= {IMG_PATH + props.poster_path} alt={props.title}/>
      <div className="movie-info">
        <h3>{props.title}</h3>
        <span className= {getClassByRate(props.vote_average)} >{props.vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {props.overview}
      </div>
    </div>
  );
};

export default Movie;