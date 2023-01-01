import Movie from "../Movie";
import SearchBar from "../SearchBar";
import useFetch from "../hooks/useFetch";

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
const SearchSection = () => {
  let searchTerm;
  const onChangeHandler = (event) => {
    searchTerm = event.target.value;
  };

const { loading, error, fetchedData } = useFetch(SEARCH_URL+searchTerm, searchTerm);
  

const main = fetchedData.map((searchedMovie) => {
  const { title, vote_average, overview, id, backdrop_path } = searchedMovie;
  return (
    <Movie
      title={title}
      vote_average={vote_average}
      overview={overview}
      id={id}
      backdrop_path={backdrop_path}
    />
)}
  );

  return (
    <div>
      <SearchBar onChange={onChangeHandler} />
      {loading ? <p>Loading...</p> : main}
    </div>
  );
};
export default SearchSection;
