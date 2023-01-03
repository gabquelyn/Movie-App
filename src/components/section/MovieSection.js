import "./MovieSection.css";
import Movie from "../Movie";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import SearchBar from "../SearchBar";
import Loading from "../Loading";
import Ooops from "../Ooops";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const MovieSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

const prevHandler = () => {
  if(page === 1){
    return
  }
  setPage(prev => prev - 1);
}
const nextHandler = () => {
  setPage(prev => prev + 1)
}

const searchTermHandler = (event) => {
  setPage(1)
  setSearchTerm(event.target.value)
}


  let URL;
  if (searchTerm) {
    URL = SEARCH_URL + searchTerm + `"&page=${page}`;
  } else {
    URL = API_URL + page;
  }

  let main;
  const { loading, error, fetchedData } = useFetch(URL, null);

  if(fetchedData.length > 0){
    main = fetchedData.map((movieData) => {
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
  }else{
    main = <Ooops message = "Ooops!! Nothing found"/>
  }
  return (
    <div>
      <header className="header">
        <form autoComplete="off">
          <SearchBar onChange = {searchTermHandler}/>
        </form>
      </header>
      <div className="main">
        {loading ? <Loading/> : main }
      </div>
      <div className="controls">
        <button onClick = {prevHandler}>Prev</button>
        <button onClick = {nextHandler}>Next</button>
      </div>
    </div>
  );
};
export default MovieSection;
